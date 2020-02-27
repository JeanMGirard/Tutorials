---
id: guides-git
title: Git
sidebar_label: Git
---

## Fundamentals

------------------------------------
## Essentials

### Workflows

**Must Read:** https://www.atlassian.com/git/tutorials/comparing-workflows
- git-flow: [cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/)

### Worktrees

------------------------------------

## References
- [config](#git-config)
- [logs](#git-logs)

------------------------------------

### git config

**Step per step** https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config

```sh
git config --global user.username "JohnDoe"
git config --global user.name "John Doe"
git config --global user.email "JohnDoe@gmail.com"
git config --global core.editor nano
git config --global merge.tool kdiff3
```

------------------------------------
### git logs

```bash
git log --graph --oneline --decorate
```

``git log``

Display the entire commit history using the default formatting. If the output takes up more than one screen, you can use Space to scroll and q to exit.

``git log -n <limit>``

Limit the number of commits by <limit>. For example, git log -n 3 will display only 3 commits.

``git log --oneline``

Condense each commit to a single line. This is useful for getting a high-level overview of the project history.

``git log --stat``

Along with the ordinary git log information, include which files were altered and the relative number of lines that were added or deleted from each of them.

``git log -p``

Display the patch representing each commit. This shows the full diff of each commit, which is the most detailed view you can have of your project history.

``git log --author="<pattern>"``

Search for commits by a particular author. The <pattern> argument can be a plain string or a regular expression.

``git log --grep="<pattern>"``

Search for commits with a commit message that matches <pattern>, which can be a plain string or a regular expression.

``git log <since>..<until>``

Show only commits that occur between <since> and <until>. Both arguments can be either a commit ID, a branch name, HEAD, or any other kind of revision reference.

``git log <file>``

Only display commits that include the specified file. This is an easy way to see the history of a particular file.

``git log --graph --decorate --oneline``

A few useful options to consider. The --graph flag that will draw a text based graph of the commits on the left hand side of the commit messages. --decorate adds the names of branches or tags of the commits that are shown. --oneline shows the commit information on a single line making it easier to browse through commits at-a-glance.

-----------------------------------------------

## Resources

### Awesome

**List of tools**
- [Awesome-Git](https://github.com/dictcp/awesome-git)
- [Awesome-Git-Sddons](https://github.com/stevemao/awesome-git-addons)


### AddOns

__A Checker__
- git-extras
- git-flow
- git-hooks
- hub (for github)
- git-ink
- git-issue
- git-lfs
- git-playback
- git-open  (-)
- git-blame-someone-else ( XD )
- git-stats
- git-secret
- git-secrets
- git-recent
- git-interactive-rebase-tool
- git-standup
- git-signatures


### Other
**aliases are just a suggestions*

| **Workflows** | ? / 10 | alias* | Notes |
| ------------- |:------:|:------:| ----- |
| git-flow  | 9 | f |   |
| HubFlow   | ? | hf |   |
| | ? | |   |
| **GUI Clients** | ? / 10 |  | Notes |
| git-fork | ? | |
| GitFiend | ? | |
| | ? | |
| **Other** | ? / 10 |  | Notes |
| git-credential-manager |
