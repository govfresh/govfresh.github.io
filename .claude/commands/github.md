# GitHub

Git and GitHub workflow for govfresh.github.io → https://github.com/govfresh/govfresh.github.io

Default branch: `main` (merges deploy automatically to GitHub Pages)

Read the argument passed to this skill and run the matching command below.

---

## `new branch`

Ask the user: **Branch name?**

Then run:
```
git checkout -b <name>
git branch
```

Confirm the new branch is active.

---

## `commit and pr`

1. Run:
```
git status
git diff --stat
git log main..HEAD --oneline
```

2. Draft a commit message based on what changed. Show it to the user.

3. Ask: **Commit message looks good? (yes / edit / cancel)**
   - `edit`: ask for the message they want, use that instead
   - `cancel`: stop here

4. Run:
```
git add -A
git commit -m "<message>"
git push -u origin <current-branch>
```

5. Return this PR link (do not use `gh` CLI):

```
https://github.com/govfresh/govfresh.github.io/compare/<current-branch>?expand=1
```

---

## `merged`

1. Run `git branch --show-current`. If on `main`, warn the user and stop.

2. Note the current branch name.

3. Ask: **Switch to main, pull, and delete `<branch>`? (yes / no)**
   - `no`: stop here

4. Run:
```
git switch main
git pull origin main
git branch -d <branch>
git push origin --delete <branch>
```

Confirm main is up to date and branch is gone.

---

## `save progress`

1. Run:
```
git status
git diff --stat
```

2. Ask: **Commit message?**

3. Run:
```
git add -A
git commit -m "<message>"
```

Confirm commit was saved. Remind the user this was not pushed.

---

## `what changed?`

Run:
```
git diff --stat
git log main..HEAD --oneline
git status --short
```

Summarize: files modified, commits ahead of main, anything staged or untracked.

---

## `what branch?`

Run:
```
git branch --show-current
git rev-list --left-right --count main...HEAD
```

Report: current branch name, how many commits ahead of and behind `main`.
