<a name="unreleased"></a>
## [Unreleased]

<a name="v0.1.0-alpha.2"></a>
## [v0.1.0-alpha.2] - 2020-04-19

### 1. Feature

- **components:** introduce customize variable via tailwind config files
- **components:** support new cookie hook and data consent
- **core:** new information page for debugging and log
- **pages:** add new debug and rewrite information pages
- **ui:** add tailwind macro
- **ui:** change css framework from styled-components to emotion

### 2. Improvement

- **core:** support privary and data collector with custom banner
- **core:** add support token salt and access token key
- **core:** add salt for some token in website
- **deps:** add storybook supported with example stories
- **docs:** seperate document to docs folder
- **pages:** change page title to matches
- **pages:** avoid exception error with cannot get images
- **test:** support enzyme with jest
- **test:** specify source code in sonar
- **ui:** add tailwind support in website.
- **ui:** fully remove all bulma and sass code
- **ui:** add default configuration and test

### 3. Performance

- **config:** caches gatsby cache folder to speed up in netlify

### 4. Fixes Bug

- **core:** update project layout
- **core:** compile error since port is never exist in production
- **deps:** change jest typescript to babel present to support babel macro
- **deps:** update gatsby monorepo
- **docs:** typo
- **pages:** theme mode class name in body is no needs
- **pages:** update storybook config and make it should works
- **storybook:** public path is invalid
- **test:** fix e2e test check error
- **test:** support emotion and tailwind in unittest
- **test:** support a11y in index page and information page
- **test:** update layout snapshot
- **test:** add id in test snapshot
- **test:** add code coverage support to cypress
- **test:** include e2e test as test sources
- **test:** update test snapshot
- **test:** add test result to sonar and reduce code
- **test:** compile error in circle ci
- **test:** default export of Helmet is deprecated
- **test:** fix e2e testcase to be passed
- **test:** update test fails in master
- **test:** exclude istanbul in unittest to avoid error
- **test:** command invalid
- **test:** update component snapshot
- **test:** fix test not support jest plugins
- **test:** update circleci config cypress missing
- **test:** file missing in ci
- **test:** e2e test will run against production environment
- **test:** resolve test error first
- **test:** add debug page in e2e and make it passed
- **test:** update e2e to support new code

### 5. Technical

- update due to project layout changes
- actually scss and sass is not necessary anymore since I using css-in-js
- change code to es6 format
- add testing button to test theme provider
- revert previous commit
- remove unused code
- remove console.log
- **components:** add component guideline example code
- **config:** fix gatsby ts config use gatsby main config
- **config:** bypass checking .env file when in ci
- **config:** update deployment script in release website and release storybook
- **config:** make build website as a default build
- **config:** add babel plugin to gatsby node instead
- **config:** revert this
- **config:** add storybook directory for optional
- **core:** refactor seo code
- **core:** improve some of project layout
- **core:** seperate programming code to src and ui related
- **core:** refactor and move encrypt method to utils
- **data:** change letter layout in information page
- **deps:** remove renovate config
- **deps:** redirect and header of netlify is no needs with netlify plugins
- **deps:** remove bulma because styled-components support theme easier
- **deps:** remove unused deps
- **deps:** remove coverage check in jest, use sonar instead.c
- **deps:** add test libraries and cokkie management
- **deps:** add storybook scope in gitgo list
- **deps:** update new scope in gitgo, this introduce break changes
- **deps:** exclude istanbul when not build for coverage
- **deps:** upgrade helmet from 5.2.1 to 6.0.0
- **deps:** remove all sass libraries
- **deps:** add custom babel config
- **deps:** upgrade jest and gatsby-ts-config
- **deps:** move code coverage from codecov to sonarcloud
- **deps:** update dependency [@types](https://github.com/types)/jest to v25.2.1
- **deps-dev:** bump jest from 25.2.7 to 25.3.0
- **docs:** add more badge in quelity code
- **docs:** change some typo
- **docs:** collapsable in readme
- **docs:** complete remove scss/sass from documents and comment
- **docs:** upgrade README on title and ci section
- **docs:** add ratio title in badge
- **docs:** add AB testing in readme
- **docs:** add known issues
- **docs:** update readme
- **docs:** collapsable layout in readme
- **docs:** add new known issues about tailwind caches
- **lint:** add sonar to analytics code structure
- **script:** change mask default to be false
- **script:** add more scripts in package.json
- **script:** reduce code complix
- **script:** update some scripts, will deprecate soon
- **script:** support new option for getenv method
- **script:** refactor gatsby utils and config
- **script:** including storybook as ui smoke test and website
- **script:** remove scripts support, and update storybook
- **test:** support cypress to sonar
- **test:** add storybook smoke test in circleci
- **test:** add jest-extend and chain helper
- **test:** add support cypress for e2e testing
- **test:** add e2e test in circleci this will increase build times
- **test:** add environment template for testing
- **test:** add support cypress dashboard
- **test:** remove smoke test due to support e2e is enough
- **test:** change seq of testing in circleci
- **test:** update test snaphot
- **test:** change browser from chrome to electron
- **test:** merge lint and testing together in circleci
- **test:** update e2e test description
- **test:** add linter to sonar with json format
- **test:** support cypress coverage in sonar
- **test:** update test in circleci
- **test:** change env to test in ci
- **test:** add correctly unittest
- **ui:** reduce reupdate all whole page in emotion

### Pull Requests

- Merge pull request [#81](https://github.com/kamontat/kamontat/issues/81) from kamontat/chore/emotion
- Merge pull request [#76](https://github.com/kamontat/kamontat/issues/76) from kamontat/dependabot/npm_and_yarn/jest-25.3.0
- Merge pull request [#66](https://github.com/kamontat/kamontat/issues/66) from kamontat/renovate/gatsby-monorepo
- Merge pull request [#61](https://github.com/kamontat/kamontat/issues/61) from kamontat/renovate/jest-25.x


<a name="0.1.0-alpha.1"></a>
## 0.1.0-alpha.1 - 2020-04-02

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

- resolve merge conflict
- change renovate configuration
- code cleaner...
- update README
- **ci:** add install deps step
- **ci:** pass secret variable to build step
- **ci:** update pipline task in circleci to support lint
- **config:** move our ci to circleci
- **config:** update example env for clone on difference location
- **config:** update issue templates to be real ones
- **config:** change project license from MIT to BSD 3-Clause
- **config:** update netlify deployment environment
- **config:** add netlify configuration to define node version
- **config:** refactor configuration of gatsby config to more readable and reasonable
- **config:** add issue and pr template; this is just a template
- **config:** correct version format in netlify.toml
- **config:** move some of jest config to test folder
- **deps:** update dependency prettier to v1.19.1 ([#5](https://github.com/kamontat/kamontat/issues/5))
- **deps:** change labels of renovate bot PR
- **deps:** add env example file
- **deps:** upgrade lock file
- **deps:** add ne wheader in netlify request
- **deps:** add renovate.json ([#1](https://github.com/kamontat/kamontat/issues/1))
- **deps:** upgrade yarn lock
- **deps:** update yarn lock file
- **deps:** add new scope: docs
- **deps:** update dependency eslint-plugin-react to v7.18.3 ([#45](https://github.com/kamontat/kamontat/issues/45))
- **deps:** update dependency eslint-config-react-app to v5.1.0 ([#17](https://github.com/kamontat/kamontat/issues/17))
- **deps:** it shouldn't include branch name in caches
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
- **deps:** disable sentry in development process
- **deps:** update dependency eslint-config-prettier to v6.10.0 ([#40](https://github.com/kamontat/kamontat/issues/40))
- **deps:** update dependency [@types](https://github.com/types)/node to v12.12.26 ([#41](https://github.com/kamontat/kamontat/issues/41))
- **deps:** add support codecov
- **deps:** update gitgo changelog template to support this project
- **deps:** upgrade a lot of dependencies
- **deps:** update dependency eslint-config-react-app to v5.2.0 ([#42](https://github.com/kamontat/kamontat/issues/42))
- **deps:** update dependency eslint-plugin-react to v7.18.2 ([#44](https://github.com/kamontat/kamontat/issues/44))
- **deps:** add cloudinary url settings
- **deps:** update gatsby monorepo ([#43](https://github.com/kamontat/kamontat/issues/43))
- **deps:** update dependency rimraf to v3.0.1 ([#39](https://github.com/kamontat/kamontat/issues/39))
- **docs:** mark project license as BSD 3-Clause
- **docs:** add codecov
- **docs:** update new readme format
- **docs:** add new format of readme file
- **docs:** update links in issue template
- **docs:** add security policy
- **docs:** remove code of conduct and contributing to use default
- **docs:** add code of conduct templates
- **docs:** add new contributing guide
- **docs:** add technical stack
- **lint:** as prettier suggestion
- **lint:** format by pretifier
- **lint:** include ts in prettier
- **lint:** update prettier
- **lint:** refactor code for more testable
- **release:** publish version 0.1.0-alpha.1
- **script:** remove predefine cloudinary/ga and add option to getenv
- **script:** add bypass in deployment step
- **script:** update jest script to support component testing
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
[Unreleased]: https://github.com/kamontat/kamontat/compare/v0.1.0-alpha.2...HEAD
[v0.1.0-alpha.2]: https://github.com/kamontat/kamontat/compare/0.1.0-alpha.1...v0.1.0-alpha.2
