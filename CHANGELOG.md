# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [1.7.1] - 09-11-2020

### Fixed
 - fixed documentation with `.nojekyll` file [#37](https://github.com/Luke-zhang-04/DeStagnate/pull/37)


## [1.7.0] - 09-11-2020

### Added
- add ability to create function components within JSX and createElement [#35](https://github.com/Luke-zhang-04/DeStagnate/pull/35)
- add es6 bundles [230a5c6](https://github.com/Luke-zhang-04/DeStagnate/commit/230a5c6)
- feat: JSX Typings [#28](https://github.com/Luke-zhang-04/DeStagnate/pull/28)
- export Ref interface from index.ts [#26](https://github.com/Luke-zhang-04/DeStagnate/pull/26)

### Changed
- feat: only bind necessary event listeners [#34](https://github.com/Luke-zhang-04/DeStagnate/pull/34)
- Decreased bundle size by replacing long error messages with references to the documentation site [#33](https://github.com/Luke-zhang-04/DeStagnate/pull/33)

### Removed
- depreciate CLI [d174590](https://github.com/Luke-zhang-04/DeStagnate/commit/d174590)


## [1.6.1] - 08-16-2020
- version to 1.6.1 [fac75ea85c4e890676721ea8fd3818f5489362be](https://github.com/Luke-zhang-04/DeStagnate/commit/fac75ea85c4e890676721ea8fd3818f5489362be)

### Fixed
- fix: DeStangate generics changed to any instead of unknown [6c6c51a215d4162734b1ea91817f454f3f3fbaec](https://github.com/Luke-zhang-04/DeStagnate/commit/6c6c51a215d4162734b1ea91817f454f3f3fbaec)


## [1.6.0] - 08-12-2020
- version to 1.6.0 [2d5d20d6b5fe686d17cab0(ba717a1434cbb10df][https://github.com/Luke-zhang-04/DeStagnate/commit/2d5d20d6b5fe686d17cab03ba717a1434cbb10df)

### Added
- feat: export DeStagnate as Component as well as default [86fa29942d86d4b4ee50da5ea047ab8b2ed44543](https://github.com/Luke-zhang-04/DeStagnate/commit/86fa29942d86d4b4ee50da5ea047ab8b2ed44543)
- feat: add nested components compatibility as child of createElement [663111fcb603766342b1628bcbb404a681f6528c](https://github.com/Luke-zhang-04/DeStagnate/commit/663111fcb603766342b1628bcbb404a681f6528c)
- add componentDidWarn and ability to modify parent [ccce17e594b19dc9604a3e4e75bebcf2c7441b2f](https://github.com/Luke-zhang-04/DeStagnate/commit/ccce17e594b19dc9604a3e4e75bebcf2c7441b2f)
- add commonjs bundle, remove eslint formatting [0b970f82a10e7755acc366872fc305ef2ae79330](https://github.com/Luke-zhang-04/DeStagnate/commit/0b970f82a10e7755acc366872fc305ef2ae79330)
- feat: add shouldComponentUpdate method [71674440bdc22897393299503f16af54e13287a2](https://github.com/Luke-zhang-04/DeStagnate/commit/71674440bdc22897393299503f16af54e13287a2)
- feat: allow disabling of strict mode [1147411887b9704a267f8e9fb1bbb766b90b707a](https://github.com/Luke-zhang-04/DeStagnate/commit/1147411887b9704a267f8e9fb1bbb766b90b707a)

### Changed
- revamp site [290ca88e31c4441b7c55fffe25f6ad438478fc05](https://github.com/Luke-zhang-04/DeStagnate/commit/290ca88e31c4441b7c55fffe25f6ad438478fc05)
- update tests with seperate HTML file [0e65e47471587c682637ce198bf83afbcb9991e9](https://github.com/Luke-zhang-04/DeStagnate/commit/0e65e47471587c682637ce198bf83afbcb9991e9)
- allow props to be null type in Typescript [98adc80f5e08946fbc2a7dd28041996ae4c23d98](https://github.com/Luke-zhang-04/DeStagnate/commit/98adc80f5e08946fbc2a7dd28041996ae4c23d98)
- Update minimal example [668f8c7277d0a586cd59a25cff387d069433e5c7](https://github.com/Luke-zhang-04/DeStagnate/commit/668f8c7277d0a586cd59a25cff387d069433e5c7)
- add semicolons to eslint format rules (for dist bundles) [f0de084cc3d84144188be3be0abd0b4c384878ca](https://github.com/Luke-zhang-04/DeStagnate/commit/f0de084cc3d84144188be3be0abd0b4c384878ca)
- add new logo [1d63cb1ea4520fc862d473704b239a1428e1f9bd](https://github.com/Luke-zhang-04/DeStagnate/commit/1d63cb1ea4520fc862d473704b239a1428e1f9bd)
- typescript compiles to ES6 instead of ES5 [e7d579cb66af589e1a8be24f29a057affc3db1cb](https://github.com/Luke-zhang-04/DeStagnate/commit/e7d579cb66af589e1a8be24f29a057affc3db1cb)
- move createComponent and related methods to preset [8419f12280222a1903e60d97ec3b72007a557301](https://github.com/Luke-zhang-04/DeStagnate/commit/8419f12280222a1903e60d97ec3b72007a557301)

### Fixed
- fix: getSnapshotBeforeUpdate copies objects [846650e8e0e75fea42cd28a3d167958df65c0f2d](https://github.com/Luke-zhang-04/DeStagnate/commit/846650e8e0e75fea42cd28a3d167958df65c0f2d)
- add babelrc.testing.js and .nycrc.json to npmignore [7459be0d6e469c8a9d7e275707458aaeb48497f8](https://github.com/Luke-zhang-04/DeStagnate/commit/7459be0d6e469c8a9d7e275707458aaeb48497f8)


## [1.5.3] - 2020-07-30
- version to 1.5.3 [337ab833b3a74d1c56e1ea(01efe5379cef364f4][https://github.com/Luke-zhang-04/DeStagnate/commit/337ab833b3a74d1c56e1ea901efe5379cef364f4)

### Added
- add CHANGELOG [24a1c3a8e5eb81d818c984fec(38f831c6a6893f][https://github.com/Luke-zhang-04/DeStagnate/commit/24a1c3a8e5eb81d818c984feca38f831c6a6893f)
- add CDN details to wiki [ddb19abd8c8b060f3fdf833909dfe7c7ccb816a2](https://github.com/Luke-zhang-04/DeStagnate/commit/ddb19abd8c8b060f3fdf833909dfe7c7ccb816a2)
- added new license headers [dd70665a088b12f20d7d82f1060a388453b4e8ab](https://github.com/Luke-zhang-04/DeStagnate/commit/dd70665a088b12f20d7d82f1060a388453b4e8ab)

### Changed
- update README with CDN [72920082e448c0faf3e0e1865f1709a5b1ed8c05](https://github.com/Luke-zhang-04/DeStagnate/commit/72920082e448c0faf3e0e1865f1709a5b1ed8c05)


## [1.5.2] - 2020-07-30
- version to 1.5.2 [07e76cf](https://github.com/Luke-zhang-04/DeStagnate/commit/07e76cf)

### Added
- add tests and test coverage [45e3487](https://github.com/Luke-zhang-04/DeStagnate/commit/45e3487)
- add tests to exclusion [d23c48c](https://github.com/Luke-zhang-04/DeStagnate/commit/d23c48c)
- add CI workflow [ec5989b](https://github.com/Luke-zhang-04/DeStagnate/commit/ec5989b)
- add tests badge [a957962](https://github.com/Luke-zhang-04/DeStagnate/commit/a957962)
- add tests badge [cfe4026](https://github.com/Luke-zhang-04/DeStagnate/commit/cfe4026)

### Fixed
- fix: put componentDidMount before array return [99d5fde](https://github.com/Luke-zhang-04/DeStagnate/commit/99d5fde)
- make warning messages consistent [b9ca60a](https://github.com/Luke-zhang-04/DeStagnate/commit/b9ca60a)


## [1.5.1] - 2020-07-28
- version to 1.5.1 [e039b96](https://github.com/Luke-zhang-04/DeStagnate/commit/e039b96)

### Added
- add *.config.js to codeclimate config [8a40b95](https://github.com/Luke-zhang-04/DeStagnate/commit/8a40b95)
- add development build [6cc0ff7](https://github.com/Luke-zhang-04/DeStagnate/commit/6cc0ff7)

### Changed
- refactor: use array and map instead of hard code [0ddb37e](https://github.com/Luke-zhang-04/DeStagnate/commit/0ddb37e)
- refactor: use an object and loop for event listeners [96be7e6](https://github.com/Luke-zhang-04/DeStagnate/commit/96be7e6)
- merge branch master with 1.5.x [56dc18d](https://github.com/Luke-zhang-04/DeStagnate/commit/56dc18d)
- refactor: remove duplicated code [2ae99a4](https://github.com/Luke-zhang-04/DeStagnate/commit/2ae99a4)


## [1.5.0] - 2020-07-27
- version to 1.5.0 [7d54d4c](https://github.com/Luke-zhang-04/DeStagnate/commit/7d54d4c)

### Added
- add ability to create nested components [6ad5f2e](https://github.com/Luke-zhang-04/DeStagnate/commit/6ad5f2e)
- add ability to create nested components [8b76339](https://github.com/Luke-zhang-04/DeStagnate/commit/8b76339)
- feat: add ability to use a ref for nested components [b88bbe8](https://github.com/Luke-zhang-04/DeStagnate/commit/b88bbe8)
- feat: add ability to use a ref for nested components [e3f211a](https://github.com/Luke-zhang-04/DeStagnate/commit/e3f211a)
- add tictactoe example to docs [313f5cf](https://github.com/Luke-zhang-04/DeStagnate/commit/313f5cf)
- docs(site): add ref example [480fe90](https://github.com/Luke-zhang-04/DeStagnate/commit/480fe90)
- make ref.current null by default [be6a35e](https://github.com/Luke-zhang-04/DeStagnate/commit/be6a35e)
- add ref example to config [1b9fc32](https://github.com/Luke-zhang-04/DeStagnate/commit/1b9fc32)
- docs: update type definitions [a0aa3e9](https://github.com/Luke-zhang-04/DeStagnate/commit/a0aa3e9)
- feat: add event listener capabilities [29c00ec](https://github.com/Luke-zhang-04/DeStagnate/commit/29c00ec)

### Fixed
- fix indentation of code [c89c129](https://github.com/Luke-zhang-04/DeStagnate/commit/c89c129)


## [1.4.4] - 2020-07-22
### Added
- add babelrc to npmignore [6d1b8c7](https://github.com/Luke-zhang-04/DeStagnate/commit/6d1b8c7)


## [1.4.4] - 2020-07-22
### Changed
- remove browser fields [5a9b3ba](https://github.com/Luke-zhang-04/DeStagnate/commit/5a9b3ba)
- change way distribution is built [60ee8bb](https://github.com/Luke-zhang-04/DeStagnate/commit/60ee8bb)
- use seperate babel config for minification [57195f6](https://github.com/Luke-zhang-04/DeStagnate/commit/57195f6)
- format non-production code with eslint [ca7cc76](https://github.com/Luke-zhang-04/DeStagnate/commit/ca7cc76)


## [1.4.1] - 2020-07-21
### Added
- add attributes to package.json [cb15de0](https://github.com/Luke-zhang-04/DeStagnate/commit/cb15de0)

### Changed
- use declaration true and update main and types in package.json [38105df](https://github.com/Luke-zhang-04/DeStagnate/commit/38105df)
- make *.d.ts generated [0e3be83](https://github.com/Luke-zhang-04/DeStagnate/commit/0e3be83)
- build to lib on publish [b29eb37](https://github.com/Luke-zhang-04/DeStagnate/commit/b29eb37)
- change eslint configuration settings [315943f](https://github.com/Luke-zhang-04/DeStagnate/commit/315943f)


## [1.3.2] - 2020-07-21
### Added
- @Luke-zhang-04 1.3.0 feat: add ability to create namespaced elements (#5)
  - add shouldPrintComment and new plugins to Babelrc.js [eb18a82](https://github.com/Luke-zhang-04/DeStagnate/commit/eb18a82)
  - version to 1.3.0 [970ccef](https://github.com/Luke-zhang-04/DeStagnate/commit/970ccef)
  - add ./cli/*.js to codeclimate ignore [de414a0](https://github.com/Luke-zhang-04/DeStagnate/commit/de414a0)
  - Merge branch 'master' of Luke-zhang-04/DeStagnate into 1.3.x [f3a7728](https://github.com/Luke-zhang-04/DeStagnate/commit/f3a7728)
  - use main property in package.json, change way lib is built [ab61f4c](https://github.com/Luke-zhang-04/DeStagnate/commit/ab61f4c)
  - use main property in package.json, change way lib is built [dac4867](https://github.com/Luke-zhang-04/DeStagnate/commit/dac4867)
  - update npmignore [038b737](https://github.com/Luke-zhang-04/DeStagnate/commit/038b737)
  - feat: add ability to create namespaced elements [9cdee2e](https://github.com/Luke-zhang-04/DeStagnate/commit/9cdee2e)
  - add js files to eslintignore [e3ce124](https://github.com/Luke-zhang-04/DeStagnate/commit/e3ce124)

### Fixed
- fix: type definitions for createElementNS and render (#8)
  - fix: type definitions for createElementNS and render [38b85b0](https://github.com/Luke-zhang-04/DeStagnate/commit/38b85b0)
  - docs(wiki): update documentation for createElementNS [3341eb3](https://github.com/Luke-zhang-04/DeStagnate/commit/3341eb3)
  - Merge branch '1.3.x' of Luke-zhang-04/DeStagnate i… [8b654d9](https://github.com/Luke-zhang-04/DeStagnate/commit/8b654d9)
  - version to 1.3.1 [e461e4e](https://github.com/Luke-zhang-04/DeStagnate/commit/e461e4e)
- @Luke-zhang-04 fix: type definitions for render (#9)
  - fix: type definitions for render [efc55fc](https://github.com/Luke-zhang-04/DeStagnate/commit/efc55fc)
  - add warning message when mutating state [4c5098a](https://github.com/Luke-zhang-04/DeStagnate/commit/4c5098a)
  - refactor: add null checks to setState [7ce98e4](https://github.com/Luke-zhang-04/DeStagnate/commit/7ce98e4)
  - docs: build script puts new build in docs [f8dd12b](https://github.com/Luke-zhang-04/DeStagnate/commit/f8dd12b)
  - docs: add source code links to examples [6532fdf](https://github.com/Luke-zhang-04/DeStagnate/commit/6532fdf)
  - Do not use 1.3.0 or 1.3.1, as there are typeerrors


## [1.2.4] - 2020-07-19
- version to 1.2.4

### Changed
- make state private, use getters and setters [ca99dc5](https://github.com/Luke-zhang-04/DeStagnate/commit/ca99dc5)
- add didSetInitialState to true on mounting [e85c1c2](https://github.com/Luke-zhang-04/DeStagnate/commit/e85c1c2)
- build previous commit [6958afb](https://github.com/Luke-zhang-04/DeStagnate/commit/6958afb)
- add transpile notice for calculator example [ddac74c](https://github.com/Luke-zhang-04/DeStagnate/commit/ddac74c)


## [1.2.3] - 2020-07-11
### Fixed
- fix(setState): Don't throw an error on every key


## [1.2.2] - 2020-07-11
### Fixed
- No typescript error when setting partial state
- Throw an error if new key given in setState


## [1.2.1] - 2020-07-09
### Fixed
fix(package.json): remove self dependency from local file


## [1.2.0] - 2020-07-09
### Added
- add CLI and ability to transpile JSX [f4a9f48](https://github.com/Luke-zhang-04/DeStagnate/commit/f4a9f48)
- add ability to transpile typescript [524c232](https://github.com/Luke-zhang-04/DeStagnate/commit/524c232)
- feat(CLI): add ability to specify configuration file [6d03bc6](https://github.com/Luke-zhang-04/DeStagnate/commit/6d03bc6)
- docs: use new bundle [d786da5](https://github.com/Luke-zhang-04/DeStagnate/commit/d786da5)
- docs(CLI): add more help for using CLI, add --version -V flag [ab9646c](https://github.com/Luke-zhang-04/DeStagnate/commit/ab9646c)

### Changed
- move examples to src [06dc790](https://github.com/Luke-zhang-04/DeStagnate/commit/06dc790)
- remove console.log from createElement [9238385](https://github.com/Luke-zhang-04/DeStagnate/commit/9238385)
- update config file and ignore in NPM [cd60b80](https://github.com/Luke-zhang-04/DeStagnate/commit/cd60b80)
- docs(wiki): finish documentation for JSX and CLI [bbc5953](https://github.com/Luke-zhang-04/DeStagnate/commit/bbc5953)

### Fixed
- fix: add development comment only on development [9200ea8](https://github.com/Luke-zhang-04/DeStagnate/commit/9200ea8)
- fix: add development comment only on development [ceacbef](https://github.com/Luke-zhang-04/DeStagnate/commit/ceacbef)


## [1.1.0] - 2020-07-08
### Added
- docs: add ability to see browser and node envs
- docs: add props example
- allow render to return an array
- feat: add working props
- add new methods to README, refactor createElement
- feat: add getSnapshotBeforeUpdate method
- feat: add component did catch method

### Changed
- change render to abstract, add public getState getter
- change console.error to throw new Error() in lifecycle methods


## [1.0.3] - 2020-07-07
### Changed
- make some methods readonly, including
  - setstate
  - mount and mountComponent
  - unmount and unmountComponent
- change unmount behaviour
  - unmound used to remove parent, now it removes the parents children


## [1.0.2] - 2020-07-07
### Fixed
fix typescript type problems in createElement


## [1.0.1] - 2020-07-07
### Fixed
- Fixed browser imports in example
- Small tweaks


## [1.0.0] - 2020-07-07
### Added
- Add basic component making
- Add createElement function
- Add lifecycle methods
- Add state mutating
- Add examples in docs website
