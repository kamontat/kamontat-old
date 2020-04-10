# Continuous Integration & Continuous Deployment

[![Deployment status][netlify-status-img]][netlify-status-link] [![Test status][circleci-status-img]][circleci-status-link] [![Code coverage][coverage-status-img]][coverage-status-link] [![Quality status][sonarcloud-status-img]][sonarcloud-link]

This repository has connected to several CI/CD services. In order to automatically all testing deployment process. I will breakdown on this documentation for you to understand how application flow works.

1. Developer will create new branch call `feature/<name>` can working on their branch.
2. After finish, their need to create new Pull request to `master` branch.
3. Checking code style, unit testing will automatically run in `CircleCI`.
4. Along with code analytics and code coverage will collect and report to `SonarCloud`.
5. After All testing passed and code has been reviewed, I will merge it.
6. When many package form together with several features (maybe 1-3 months), I will create pull request to `release/website` branch.
7. After every test and e2e in CI is passed, I will merge to release branch which `Netlify` will build package and deploy in staging environment.
8. Last verify in Netlify, then I will release this version in production environment.


<!-- netlify links -->
[netlify-status-link]: https://app.netlify.com/sites/kamontat/deploys
[netlify-status-img]: https://img.shields.io/netlify/1a3194ab-0c6d-4bae-887f-caf7e1be6dea?logo=netlify&logoColor=white&style=flat-square

<!-- circleci links -->
[circleci-status-link]: https://app.circleci.com/pipelines/github/kamontat/kamontat
[circleci-status-img]: https://img.shields.io/circleci/build/github/kamontat/kamontat/master?label=circleci&logo=circleci&style=flat-square

<!-- code coverage links -->
[coverage-status-link]: https://sonarcloud.io/component_measures?id=kamontat_kamontat&metric=Coverage
[coverage-status-img]: https://img.shields.io/sonar/coverage/kamontat_kamontat?logo=sonarcloud&logoColor=white&server=https%3A%2F%2Fsonarcloud.io&style=flat-square

[sonarcloud-link]: https://sonarcloud.io/dashboard?id=kamontat_kamontat
[sonarcloud-status-img]: https://img.shields.io/sonar/quality_gate/kamontat_kamontat?server=https%3A%2F%2Fsonarcloud.io&label=quality&logo=sonarcloud&logoColor=white&style=flat-square