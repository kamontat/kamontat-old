<!-- Title section -->
<h1 align="center">
  Personal website (kamontat)

  <img src="https://simpleicons.org/icons/gatsby.svg" width="24px">
  <img src="https://simpleicons.org/icons/typescript.svg" width="24px">
  <img src="https://simpleicons.org/icons/bulma.svg" width="24px">
  <img src="https://simpleicons.org/icons/jest.svg" width="24px">
</h1>

<!-- Description section -->
<p align="center">
  <strong>Personal website include projects show case, blog, and information. Supported by CMS platform and data analytics</strong>
</p>

<!-- CI/CD section -->
<p align="center">

  <a href="https://app.netlify.com/sites/kamontat/deploys">
    <img src="https://img.shields.io/netlify/1a3194ab-0c6d-4bae-887f-caf7e1be6dea?logo=netlify&style=flat-square" alt="deployment status" />
  </a>

  <a href="https://app.circleci.com/pipelines/github/kamontat/kamontat">
    <img src="https://img.shields.io/circleci/build/github/kamontat/kamontat/master?label=circleci&logo=circleci&style=flat-square" alt="unittest status" />
  </a>

  <a href="https://codecov.io/gh/kamontat/kamontat">
    <img src="https://img.shields.io/codecov/c/github/kamontat/kamontat?logo=codecov&logoColor=white&style=flat-square" alt="coverage status" />
  </a>
</p>

<!-- External section -->
<h3 align="center">
  <a href="https://kamontat.net">Website</a>
  <span> · </span>
  <a href="https://google.com">Google</a>
  <span> · </span>
  <a href="https://google.com">Google</a>
</h3>

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
