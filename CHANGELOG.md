<a name="unreleased"></a>
## [Unreleased]

<a name="v0.1.0-alpha.1"></a>
## v0.1.0-alpha.1 - 2020-04-02

### 1. Feature

- start new project
- **config:** move all gatsby config to src/gatsby for enable typescript
- **core:** start integrate with contentful
- **core:** implement template boiler
- **core:** update package.json
- **ui:** add my picture
- **ui:** move from material-ui to bulma for enable encode css class name

### 2. Improvement

- **config:** add new default value for react props
- **core:** change image asset to local
- **core:** support new default react props format
- **core:** includes debug when in development and add build timestamp
- **core:** support import environment data to graphql
- **core:** change links to /go path
- **core:** update new way to redirect to specify path
- **core:** move code from javascript to typescript
- **data:** change profile image to cloudinary for more transformer support
- **data:** secure environment data that might print in console
- **ui:** add more metadata for seo

### 4. Fixes Bug

- **ci:** fix typescript code in js file
- **ci:** remove download artifact because miss understanding
- **core:** resolve Contentfull error
- **core:** error in gastby config when get NODE_ENV data
- **deps:** pin dependencies ([#2](https://github.com/kamontat/kamontat/issues/2))
- **deps:** update gatsby monorepo ([#36](https://github.com/kamontat/kamontat/issues/36))
- **deps:** update gatsby monorepo ([#6](https://github.com/kamontat/kamontat/issues/6))
- **deps:** update dependency gatsby to v2.17.10 ([#4](https://github.com/kamontat/kamontat/issues/4))
- **deps:** update dependency gatsby to v2.20.10
- **deps:** update gatsby monorepo ([#3](https://github.com/kamontat/kamontat/issues/3))
- **deps:** add scss
- **deps:** update gatsby monorepo ([#18](https://github.com/kamontat/kamontat/issues/18))
- **deps:** update gatsby monorepo ([#16](https://github.com/kamontat/kamontat/issues/16))
- **deps:** update react monorepo to v16.12.0 ([#8](https://github.com/kamontat/kamontat/issues/8))
- **deps:** update gatsby monorepo ([#14](https://github.com/kamontat/kamontat/issues/14))
- **deps:** update gatsby monorepo ([#13](https://github.com/kamontat/kamontat/issues/13))
- **deps:** update dependency gatsby to v2.18.2 ([#12](https://github.com/kamontat/kamontat/issues/12))
- **deps:** update gatsby monorepo ([#11](https://github.com/kamontat/kamontat/issues/11))
- **deps:** update gatsby monorepo ([#10](https://github.com/kamontat/kamontat/issues/10))
- **deps:** update gatsby monorepo ([#9](https://github.com/kamontat/kamontat/issues/9))
- **deps:** update gatsby monorepo ([#15](https://github.com/kamontat/kamontat/issues/15))
- **deps:** update gatsby monorepo ([#7](https://github.com/kamontat/kamontat/issues/7))
- **test:** update jest config file to support new project layout
- **test:** install-packages not found
- **test:** forgot to include lint xml result to test result by circleci
- **ui:** apply typescript in the end of plugins list
- **ui:** error on index page

### 5. Technical

- update README
- change renovate configuration
- code cleaner...
- resolve merge conflict
- **ci:** add install deps step
- **ci:** pass secret variable to build step
- **ci:** update pipline task in circleci to support lint
- **config:** update issue templates to be real ones
- **config:** change project license from MIT to BSD 3-Clause
- **config:** move our ci to circleci
- **config:** update example env for clone on difference location
- **config:** update netlify deployment environment
- **config:** add netlify configuration to define node version
- **config:** refactor configuration of gatsby config to more readable and reasonable
- **config:** add issue and pr template; this is just a template
- **config:** move some of jest config to test folder
- **config:** correct version format in netlify.toml
- **deps:** update dependency eslint-plugin-react to v7.18.3 ([#45](https://github.com/kamontat/kamontat/issues/45))
- **deps:** add env example file
- **deps:** upgrade lock file
- **deps:** change labels of renovate bot PR
- **deps:** add renovate.json ([#1](https://github.com/kamontat/kamontat/issues/1))
- **deps:** add ne wheader in netlify request
- **deps:** upgrade yarn lock
- **deps:** add new scope: docs
- **deps:** update yarn lock file
- **deps:** it shouldn't include branch name in caches
- **deps:** update dependency eslint-config-react-app to v5.1.0 ([#17](https://github.com/kamontat/kamontat/issues/17))
- **deps:** remove cloudinary and google analytics
- **deps:** add editorconfig with eof new line
- **deps:** update dependency babel-preset-gatsby to v0.2.27 ([#31](https://github.com/kamontat/kamontat/issues/31))
- **deps:** update dependency [@types](https://github.com/types)/node to v12.12.34
- **deps:** upgrade eslint and prettier
- **deps:** upgrade jest and their dependencies
- **deps:** update dependency ts-jest to v24.3.0 ([#32](https://github.com/kamontat/kamontat/issues/32))
- **deps:** update typescript-eslint monorepo to v2.18.0 ([#37](https://github.com/kamontat/kamontat/issues/37))
- **deps:** remove cloudinary and google analytics plugins from gatsby
- **deps:** dump deps versions
- **deps:** update dependency prettier to v1.19.1 ([#5](https://github.com/kamontat/kamontat/issues/5))
- **deps:** update dependency eslint-config-prettier to v6.10.0 ([#40](https://github.com/kamontat/kamontat/issues/40))
- **deps:** update dependency [@types](https://github.com/types)/node to v12.12.26 ([#41](https://github.com/kamontat/kamontat/issues/41))
- **deps:** disable sentry in development process
- **deps:** add support codecov
- **deps:** upgrade a lot of dependencies
- **deps:** update dependency eslint-config-react-app to v5.2.0 ([#42](https://github.com/kamontat/kamontat/issues/42))
- **deps:** update dependency eslint-plugin-react to v7.18.2 ([#44](https://github.com/kamontat/kamontat/issues/44))
- **deps:** add cloudinary url settings
- **deps:** update gatsby monorepo ([#43](https://github.com/kamontat/kamontat/issues/43))
- **deps:** update gitgo changelog template to support this project
- **deps:** update dependency rimraf to v3.0.1 ([#39](https://github.com/kamontat/kamontat/issues/39))
- **docs:** add codecov
- **docs:** update new readme format
- **docs:** add technical stack
- **docs:** add new format of readme file
- **docs:** update links in issue template
- **docs:** add code of conduct templates
- **docs:** remove code of conduct and contributing to use default
- **docs:** add new contributing guide
- **docs:** mark project license as BSD 3-Clause
- **docs:** add security policy
- **lint:** refactor code for more testable
- **lint:** as prettier suggestion
- **lint:** include ts in prettier
- **lint:** format by pretifier
- **lint:** update prettier
- **script:** add bypass in deployment step
- **script:** update jest script to support component testing
- **script:** remove predefine cloudinary/ga and add option to getenv
- **script:** improve description and keys in gitgo commit
- **test:** add seo component test
- **test:** add circleci to support test result from junit and eslint
- **ui:** update new design logo in favicon
- **ui:** remove unused code

### Pull Requests

- Merge pull request [#57](https://github.com/kamontat/kamontat/issues/57) from kamontat/renovate/gatsby-monorepo
- Merge pull request [#56](https://github.com/kamontat/kamontat/issues/56) from kamontat/chore/reduce-javascript-v2
- Merge pull request [#55](https://github.com/kamontat/kamontat/issues/55) from kamontat/circleci-project-setup
- Merge pull request [#50](https://github.com/kamontat/kamontat/issues/50) from kamontat/renovate/node-12.x

<!-- Links section -->
[Unreleased]: https://github.com/kamontat/kamontat/compare/v0.1.0-alpha.1...HEAD
