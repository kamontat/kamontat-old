<!-- Title section -->
<h1 align="center">
  Personal website (kamontat)

  <img src="https://simpleicons.org/icons/gatsby.svg" width="24px">
  <img src="https://simpleicons.org/icons/typescript.svg" width="24px">
  <img src="https://simpleicons.org/icons/jest.svg" width="24px">
  <img src="https://simpleicons.org/icons/microsoftedge.svg" width="24px">
</h1>

<!-- Description section -->
<p align="center">
  <strong>Personal website include projects show case, blog, and information. Supported by CMS platform and data analytics</strong>
</p>

<!-- Static badge setup -->
<p align="center">
  <a href="https://github.com/kamontat/gitgo">
    <img src="https://img.shields.io/badge/commit-gitgo-6DC1E8.svg" alt="Commit management" />
  </a>
  <a href="https://app.netlify.com/sites/kamontat/overview">
    <img src="https://img.shields.io/badge/deploy%20with-netlify-00C7B7.svg?logo=netlify&logoWidth=20" alt="Netlify image"/>
  </a>
  <a href="https://app.dependabot.com/accounts/kamontat/projects/168664">
    <img src="https://img.shields.io/badge/dependencies%20-dependabot-025E8C.svg?logo=dependabot&logoWidth=20" alt="Dependencies image"/>
  </a>
</p>

<!-- External section -->
<h3 align="center">
  <a href="https://kamontat.net">Website</a>
  <span> · </span>
  <a href="https://storybook.kamontat.net">Storybook</a>
  <span> · </span>
  <a href="https://analytics.google.com/analytics/web">Google Analytics</a>
</h3>

## CI Status

| Deployment    | Test          | Code Coverage | Quality Gate  |
|:-------------:|:-------------:|:-------------:|:-------------:|
| [![Netlify build status][netlify-status-img]][netlify-status-link] | [![CircleCI status][circleci-status-img]][circleci-status-link] | [![Codecov status][codecov-status-img]][codecov-status-link] | [![SonarCloud status][sonarcloud-status-img]][sonarcloud-status-link]

## Project stack

1. Gatsby
2. React
3. Typescript
4. Bulma
5. SCSS / SASS
6. Styled Components
7. Eslint
8. Prettier
9. Jest
10. Gitgo
11. Git-chglog

## Deployment services

1. Git repository: [Github](https://github.com/kamontat/kamontat)
2. Continuous Integration: [CircleCI](https://app.circleci.com/pipelines/github/kamontat/kamontat)
3. Continuous Deployment: [Netlify](https://app.netlify.com/sites/kamontat/overview)
4. Dependencies monitoring: [WhiteSource Renovate](https://renovate.whitesourcesoftware.com/)

## Relate services

1. CMS: [Contentful](https://www.contentful.com/)
2. Host: [Netlify](https://www.netlify.com/)
3. Error monitor: [Sentry](https://sentry.io/)
4. Analytics: [Google Analytics](https://analytics.google.com/)
5. Google Tag Manager

## Know issues

### 1. Warning on test about `Please update the following components: SideEffect(NullComponent)`

This is cause by react-helmet which resolve on version 6 that currently is beta

<!-- netlify links -->
[netlify-status-link]: https://app.netlify.com/sites/kamontat/deploys
[netlify-status-img]: https://img.shields.io/netlify/1a3194ab-0c6d-4bae-887f-caf7e1be6dea?logo=netlify&logoColor=white&style=flat-square

<!-- circleci links -->
[circleci-status-link]: https://app.circleci.com/pipelines/github/kamontat/kamontat
[circleci-status-img]: https://img.shields.io/circleci/build/github/kamontat/kamontat/master?label=circleci&logo=circleci&style=flat-square

<!-- codecov links -->
[codecov-status-link]: https://codecov.io/gh/kamontat/kamontat
[codecov-status-img]: https://img.shields.io/codecov/c/github/kamontat/kamontat?logo=codecov&logoColor=white&style=flat-square

<!-- sonarcloud links -->
[sonarcloud-status-link]: https://sonarcloud.io/dashboard?id=kamontat_kamontat
[sonarcloud-status-img]: https://img.shields.io/sonar/quality_gate/kamontat_kamontat?server=https%3A%2F%2Fsonarcloud.io&label=quality&logo=sonarcloud&logoColor=white&style=flat-square
