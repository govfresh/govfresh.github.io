# Update Jekyll

Review the current Jekyll setup and walk through an update.

## Plan

Before doing anything, present this plan to the user:

---

**Update Jekyll — here's what will happen:**

1. Check current versions of `github-pages` and all gems, and flag any Ruby version mismatch with what GitHub Pages expects
2. Run `bundle update` to update all gems to their latest compatible versions
3. Remove redundant entries from the Gemfile (gems already bundled by `github-pages`)
4. Verify the site builds cleanly against both `_config.yml` and `_config_dev.yml`; surface and explain any warnings
5. Check `.gitignore` covers common junk files (`.DS_Store`, `_site/`, etc.)
6. Summarize what changed, then offer to commit `Gemfile` and `Gemfile.lock`

---

Ask: **Proceed? (yes / no)**

- If **no**: stop here, do nothing.
- If **yes**: continue with the steps below.

## Steps (only run after user confirms yes)

### 1. Check current state

Run:
```
bundle exec jekyll --version
bundle list | grep -E "github-pages|jekyll"
ruby --version
```

Then fetch the Ruby version GitHub Pages currently targets:
```
gem list github-pages
curl -s https://pages.github.com/versions.json | python3 -m json.tool | grep -E "ruby|jekyll"
```

Compare the local Ruby version to what GitHub Pages targets. If there's a mismatch, flag it clearly — it won't necessarily break the build locally, but it can cause subtle differences in production.

### 2. Update gems

Run:
```
bundle update
```

### 3. Clean up Gemfile

Review [Gemfile](Gemfile). Remove any gems that are already included transitively by `github-pages` and serve no other purpose (e.g. `jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`, `jekyll-paginate`, `jekyll-redirect-from` if listed separately). Keep gems that are genuinely needed beyond what `github-pages` provides (`logger`, `csv`, `ostruct`, `base64`, `bigdecimal`, `webrick`, platform-specific gems).

Edit [Gemfile](Gemfile) to remove any confirmed redundancies.

### 4. Verify build — both configs

Run against both configs:
```
bundle exec jekyll build --config _config.yml 2>&1 | tail -20
bundle exec jekyll build --config _config.yml,_config_dev.yml 2>&1 | tail -20
```

If either build fails, diagnose and fix before continuing.

Capture any warnings from the output. For each warning:
- Explain what it means
- Say whether it's safe to ignore or needs action
- If it needs action, fix it

### 5. Check .gitignore

Read [.gitignore](.gitignore) and check whether it covers:
- `.DS_Store`
- `_site/`
- `.jekyll-cache/`
- `.bundle/`
- `vendor/`

If any are missing, show the user what would be added and ask: **Update .gitignore? (yes / no)**. If yes, add the missing entries.

### 6. Summarize

Report:
- Ruby version (local vs. GitHub Pages target — flag if mismatched)
- Jekyll version before → after
- `github-pages` version before → after
- Gems updated (list them)
- Gems removed from Gemfile (if any)
- Warnings found and their status (ignored / fixed)
- `.gitignore` changes (if any)

Then ask: **Commit Gemfile and Gemfile.lock? (yes / no)**

- If **yes**: stage only `Gemfile` and `Gemfile.lock` (plus `.gitignore` if it was updated) and commit with message `Update gems and clean up Gemfile`.
- If **no**: remind the user to commit manually before pushing.
