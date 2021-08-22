---
title: 'Semantic Versioning with GitHub Actions'
tags: [ "GitHub Actions", "DevOps" ]
published: true
date: '2021-08-22'
---

In this post I wanted to document some exploration I did around using [GitHub Actions](https://github.com/features/actions) to automatically generate a semantic versioning compatible tag in certain circumstances. I'm going to assume the reader has a basic knowledge of both GitHub Actions and [semantic versioning](https://semver.org/).

## Requirements

Here are the requirements I'm trying to meet:

- Upon commit to the `trunk` branch, a new tag and release is created.
- There must be an easy way to indicate whether the release is a major, minor, or patch release.

There's a number of assumptions that I'm going to go by since situations outside of these might complicate this initial investigation.

- There will only be one major / minor version in service at any given time. That is, we don't need to be able to automatically generate tags for updates to previous releases.


## The Experiment

My first objective was to have a workflow that would generate a tag upon the commit to the `trunk` branch, with the tag value being the automatically calculated semantic version value. For calculating that value, I used the [Git Semantic Versioning](https://github.com/marketplace/actions/git-semantic-version) Action, by Paul Hatch. I chose this because it is very well documented and thought out, and of the ones I looked at, appears to be the most popular in terms of stars.

I took the following steps to set up and execute that first test case:
- Created a blank GitHub repo.
- Commited a basic GitHub workflow file to it, which you can see [here](https://github.com/yardbirdsax/semver-github-actions/blob/c6d8fffac517219fcf66ac1c144b94835ceb46af/.github/workflows/trunk-release.yaml). After seeing the workflow actually kick off, I realized I had forgotten to exclude the README and LICENSE files from triggering the release process. Whoops! That's corrected [here](https://github.com/yardbirdsax/semver-github-actions/blob/880bd769abfa2ce37fba20c63c95f63701cd19ca/.github/workflows/trunk-release.yaml).
- Committed one test file directly to the `trunk` branch.

This immediately resulted in a run of the job, of which the results are viewable [here](https://github.com/yardbirdsax/semver-github-actions/runs/3390772569?check_suite_focus=true). As you can see, it calculated the version tag to be "0.0.1+2", which is expected given that there have been 3 commits to the `trunk` branch (see the README of the action linked above for details).

Now, how to actually tag and generate the release?

Creating the tag turned out to be trivially simple. All I needed to do was add one more step to the existing workflow, which simply runs the `git tag xxx && git push --tags` command in a shell. You can see that step [here](https://github.com/yardbirdsax/semver-github-actions/blob/cd6e42a4c8f33bdf9c7aa42b74ee1d47c5fb364b/.github/workflows/trunk-release.yaml#L25). This is because by default, the token used in the context of a workflow has [broad repository level permissions](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token). Mind you, in an enterprise situation, this is likely to be harder because of restrictions, and rightly so. GitHub has good documentation on this subject, and I'd refer you there for now.

In terms of creating the release, I chose to use [this pre-built Action](https://github.com/marketplace/actions/github-create-tag-release) rather than write my own. Using the output of the step that created the version as an input, it was very easy to create the release. You can see that change [here](https://github.com/yardbirdsax/semver-github-actions/blob/0.0.2/.github/workflows/trunk-release.yaml#L27), and the resulting release [here](https://github.com/yardbirdsax/semver-github-actions/releases/tag/0.0.2).

In terms of bumping the minor or major versions, the pre-built Action makes that simple. To bump the minor version, all I had to do was include the text "(MINOR)" in my commit, and it [created a release](https://github.com/yardbirdsax/semver-github-actions/runs/3394558991?check_suite_focus=true#step:4:10) with the expected version of 0.1.0. Bumping the major release was similarly easy, with an inclusion of the text "(MAJOR)" that [happened](https://github.com/yardbirdsax/semver-github-actions/runs/3394571525?check_suite_focus=true#step:4:9) as well.

My two objectives accomplished, this is where I stopped the experiment for now. Overall this was easier than I thought, albeit partly because I started with a very simple objective. I can imagine this would get more complex in the face of things like requiring pre-release builds, which is certainly an area I want to explore. In addition, one would need to be careful around things such as when code gets merged into that main branch, since it will trigger at least a patch version increase. Both of these become more complex in the face of a multi-person team as well.

In all the experiment showed me how easy at least a basic workflow to automate semantically versioned releases could be, and I fully intend to start using this in daily work where feasible.