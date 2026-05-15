# Security Check

Run a full security audit of the govfresh.github.io repo and site. Recommend only — make no changes.

Repo: https://github.com/govfresh/govfresh.github.io
Site: https://govfresh.com
Standards reference: https://standards.scangov.org/security/

---

## Steps

Run all checks, then output a single prioritized report at the end.

### 1. Gem vulnerabilities

Install `bundler-audit` if not present:
```
gem list bundler-audit | grep bundler-audit || gem install bundler-audit
```

Find the `bundle-audit` binary and run audit:
```
BUNDLE_AUDIT=$(find /usr/local /opt/homebrew ~/.gem -name "bundle-audit" 2>/dev/null | head -1)
$BUNDLE_AUDIT update
$BUNDLE_AUDIT check
```

Flag any CVEs as **critical**. Note the affected gem, CVE ID, and recommended fix.

### 2. Outdated gems

Run:
```
bundle outdated
```

Flag gems with available updates that `github-pages` does not pin as **warning**. Note that `github-pages`-pinned gems can only be updated when GitHub Pages itself upgrades.

### 3. GitHub Dependabot alerts

Find `gh` and run:
```
GH=$(which gh 2>/dev/null || find /usr/local /opt/homebrew ~/.local -name "gh" 2>/dev/null | head -1)
$GH api repos/govfresh/govfresh.github.io/dependabot/alerts --jq '.[] | select(.state=="open") | {number, severity: .security_advisory.severity, summary: .security_advisory.summary, package: .dependency.package.name}'
```

If `gh` is not found or returns an auth error, flag as **manual** and direct the user to:
https://github.com/govfresh/govfresh.github.io/security/dependabot

Flag any open alerts by severity.

### 4. Secrets scan

Grep the following locations for patterns that suggest accidentally committed secrets (API keys, tokens, passwords, private URLs):
```
grep -rn --include="*.yml" --include="*.yaml" --include="*.md" --include="*.html" --include="*.rb" \
  -E "(api_key|api-key|secret|token|password|private_key|access_key)\s*[:=]\s*\S+" \
  _config.yml _data/ _includes/ _layouts/ _pages/ Gemfile
```

Exclude obvious false positives (e.g. placeholder values like `YOUR_KEY_HERE`). Flag any real-looking values as **critical**.

### 5. security.txt audit

Read [security.txt](security.txt) and [.well-known/security.txt](.well-known/security.txt) if it exists.

Check the following and flag issues:

- **Location**: RFC 9116 requires the file to be at `/.well-known/security.txt`. The current file is at the root. Flag as **warning**.
- **Expires**: Check if the `Expires` field is in the past (today's date: use system date). Flag as **critical** if expired.
- **Contact**: Must be present. Current value: `https://govfresh.com/contact`. Flag if missing.
- **Canonical**: Should reference `https://govfresh.com/.well-known/security.txt`. Flag as **warning** if missing.
- **Preferred-Languages**: Should be present. Flag as **info** if missing.
- **Policy**: Should reference a vulnerability disclosure policy URL. Current value: `https://govfresh.com/feedback` — flag as **info** if a dedicated security policy page would be more appropriate.

Recommended security.txt (for reference in report, do not write the file):
```
Contact: https://govfresh.com/contact/
Expires: <one year from today in ISO 8601 format>
Canonical: https://govfresh.com/.well-known/security.txt
Preferred-Languages: en
Policy: https://govfresh.com/contact/
```

Note: The file should also be moved from root to `/.well-known/security.txt` and the root version removed.

### 6. ScanGov standards checks

Reference: https://standards.scangov.org/security/

Check each standard and assign a status: **pass**, **warning**, **fail**, or **limitation**.

#### CSP (Content Security Policy)
Search layouts and includes for a CSP meta tag:
```
grep -rn "Content-Security-Policy" _layouts/ _includes/
```
- If found: report as **pass** and show the policy value.
- If not found: report as **warning**. Note that GitHub Pages does not support custom HTTP headers, so a `<meta http-equiv="Content-Security-Policy">` tag in the base layout is the only available option.

#### HSTS (HTTP Strict Transport Security)
GitHub Pages enforces HTTPS and sends HSTS headers automatically for `github.io` domains and custom domains with HTTPS enabled. Report as **pass** with note that this is handled by the platform.

#### X-Content-Type-Options
GitHub Pages does not support custom HTTP headers. This header cannot be set for a static GitHub Pages site. Report as **limitation** — not actionable without a reverse proxy or CDN layer.

#### Clickjacking / X-Frame-Options
Same limitation as above. GitHub Pages does not support custom HTTP headers. Report as **limitation**.

#### Paste-preventing inputs
Scan templates for patterns that block paste:
```
grep -rn "onpaste\|preventDefault.*paste\|paste.*preventDefault" _layouts/ _includes/
```
- If none found: **pass**.
- If found: **fail** with location.

#### Console errors
Cannot be checked at build time. Report as **manual check required** — recommend opening the live site in a browser with DevTools open and reviewing the Console tab for errors.

---

## Report format

Output a single table after all checks complete:

| # | Check | Status | Finding | Recommendation |
|---|-------|--------|---------|----------------|
| 1 | Gem vulnerabilities | | | |
| 2 | Outdated gems | | | |
| 3 | Dependabot alerts | | | |
| 4 | Secrets scan | | | |
| 5 | security.txt | | | |
| 6 | CSP | | | |
| 7 | HSTS | | | |
| 8 | X-Content-Type-Options | | | |
| 9 | Clickjacking | | | |
| 10 | Paste-preventing inputs | | | |
| 11 | Console errors | | | |

Status key: critical / fail / warning / info / limitation / pass

Follow the table with a **Priority actions** section listing only the items that need attention, ordered by severity.
