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
</h3>

<details>
  <summary>Application Status</summary>

| Title      | Badge                                                     |
| :--------- | :-------------------------------------------------------- |
| Uptime     | [![Uptime status][uptime-status-img]][uptime-status-link] |
| Uptime 7d  | [![Uptime status][uptime-7d-img]][uptime-status-link]     |
| Uptime 30d | [![Uptime status][uptime-30d-img]][uptime-status-link]    |

</details>

<details>
  <summary>CI Status</summary>

| Title         | Badge                                                           |
| :------------ | :-------------------------------------------------------------- |
| Deployment    | [![Deployment status][netlify-status-img]][netlify-status-link] |
| Test          | [![Test status][circleci-status-img]][circleci-status-link]     |
| Code Coverage | [![Code coverage][coverage-status-img]][coverage-status-link]   |
| Quality Gate  | [![Quality status][sonarcloud-status-img]][sonarcloud-link]     |

</details>

<details>
  <summary>Code Quality</summary>

| Title           | Badge                                                                 |
| :-------------- | :-------------------------------------------------------------------- |
| Maintainability | [![maintainability][sonarcloud-maintainability-img]][sonarcloud-link] |
| Reliablilty     | [![reliablilty][sonarcloud-reliablilty-img]][sonarcloud-link]         |
| Security        | [![security][sonarcloud-security-img]][sonarcloud-link]               |
| Vulnerabilities | [![vulnerabilities][sonarcloud-vulnerabilities-img]][sonarcloud-link] |
| Technical Debt  | [![technical debt][sonarcloud-techdebt-img]][sonarcloud-link]         |
| Issues          | [![issues][sonarcloud-issues-img]][sonarcloud-link]                   |
| Line of code    | [![line of code][sonarcloud-loc-img]][sonarcloud-link]                |
| Duplicated code | [![duplicated code][sonarcloud-dupcode-img]][sonarcloud-link]         |
| Code Smell      | [![code smell][sonarcloud-code-smell-img]][sonarcloud-link]           |

</details>

<details>
  <summary>Project technology</summary>

1. Gatsby
2. React
3. Typescript
4. Styled Components
5. Eslint
6. Prettier
7. Jest
8. Gitgo
9. Git-chglog

</details>

<details>
  <summary>Development services</summary>

1. Git repository: [Github](https://github.com/kamontat/kamontat)
2. Continuous Integration: [CircleCI](https://app.circleci.com/pipelines/github/kamontat/kamontat)
3. Continuous Deployment: [Netlify](https://app.netlify.com/sites/kamontat/overview)
4. Dependencies monitoring: [Dependabot](https://app.dependabot.com/)
5. Error monitoring: [Sentry][sentry]

</details>

<details>
  <summary>Related services</summary>

1. CMS: [Contentful][contentful]
2. Google Tag Manager
3. Analytics: [Google Analytics](https://analytics.google.com/)

</details>

<details>
  <summary>Known issues</summary>

### 1. Warning on test about `Please update the following components: SideEffect(NullComponent)`

This is cause by react-helmet which resolve on version 6 that currently is beta

</details>

<!-- netlify links -->
[netlify-status-link]: https://app.netlify.com/sites/kamontat/deploys
[netlify-status-img]: https://img.shields.io/netlify/1a3194ab-0c6d-4bae-887f-caf7e1be6dea?logo=netlify&logoColor=white&style=flat-square

<!-- circleci links -->
[circleci-status-link]: https://app.circleci.com/pipelines/github/kamontat/kamontat
[circleci-status-img]: https://img.shields.io/circleci/build/github/kamontat/kamontat/master?label=circleci&logo=circleci&style=flat-square

<!-- code coverage links -->
[coverage-status-link]: https://sonarcloud.io/component_measures?id=kamontat_kamontat&metric=Coverage
[coverage-status-img]: https://img.shields.io/sonar/coverage/kamontat_kamontat?logo=sonarcloud&logoColor=white&server=https%3A%2F%2Fsonarcloud.io&style=flat-square

<!-- uptimerobot -->
[uptime-status-link]: https://status.kamontat.net
[uptime-status-img]: https://img.shields.io/uptimerobot/status/m782498097-1ad17a9a18c1ce4f09a4a295?style=flat-square
[uptime-7d-img]: https://img.shields.io/uptimerobot/ratio/7/m782498097-1ad17a9a18c1ce4f09a4a295?label=uptime%2030d&style=flat-square
[uptime-30d-img]: https://img.shields.io/uptimerobot/ratio/m782498097-1ad17a9a18c1ce4f09a4a295?label=uptime%2030d&style=flat-square

<!-- sonarcloud links -->
[sonarcloud-link]: https://sonarcloud.io/dashboard?id=kamontat_kamontat
[sonarcloud-status-img]: https://img.shields.io/sonar/quality_gate/kamontat_kamontat?server=https%3A%2F%2Fsonarcloud.io&label=quality&logo=sonarcloud&logoColor=white&style=flat-square
[sonarcloud-loc-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=ncloc
[sonarcloud-maintainability-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=sqale_rating
[sonarcloud-reliablilty-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=reliability_rating
[sonarcloud-security-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=security_rating
[sonarcloud-vulnerabilities-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=vulnerabilities
[sonarcloud-issues-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=bugs
[sonarcloud-code-smell-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=code_smells
[sonarcloud-techdebt-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=sqale_index
[sonarcloud-dupcode-img]: https://sonarcloud.io/api/project_badges/measure?project=kamontat_kamontat&metric=duplicated_lines_density

<!-- External links -->
[contentful]: https://www.contentful.com/
[netlify]: https://www.netlify.com/
[sentry]: https://sentry.io/