---
title: 'Converting my blog to use GitHub Actions'
tags: [ 'GitHub Actions', 'DevOps' ]
date: '2021-08-21'
---

As of late I've been doing a lot of work with [GitHub Actions](https://github.com/features/actions), so in an attempt to minimize the number of technologies I'm using in my side projects I've converted this blog to using them for its build and deploy process. Overall, the experience was painless; the only hiccups were things not directly related to GitHub Actions (like forgetting to set the default region for the AWS CLI). The steps were:

- Move the Git repository of the site from Azure Repos to GitHub, of which the hardest part was remembering how to use [`git filter-repo`](https://github.com/newren/git-filter-repo/) to remove some accidental early commits of large binaries, which GitHub doesn't permit.
- Create the workflow file that builds and deploys the site, which you can see [here](https://github.com/yardbirdsax/personal-site/blob/main/.github/workflows/main.yml).
- Add two [GitHub secrets](https://docs.github.com/en/actions/reference/encrypted-secrets): one for the AWS access key, and one for the corresponding secret. Both of these are referenced in the workflow, since committing such things directly into source control would be a big old no-no.

After that, everything just, well, worked! I liked how I didn't have to manually set up the job, as one does in working with Azure DevOps; instead the act of pushing the workflow file itself created the Action.

I may look at some additional improvements if time permits (hah!), such as reducing the build time by pre-installing some dependencies on a container image and using that to execute the build.