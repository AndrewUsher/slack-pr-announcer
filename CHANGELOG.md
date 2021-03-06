# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.5.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v2.4.0...v2.5.0) (2020-08-16)


### Features

* add generic versioning script ([4de5c28](https://github.com/AndrewUsher/slack-pr-announcer/commit/4de5c28392628e9a49bc182f8c02bc39f0b40637))
* add yarn offline mirror ([2e31ab2](https://github.com/AndrewUsher/slack-pr-announcer/commit/2e31ab283314ffc712b75986a8e18002dd33007c))

## [2.4.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v2.3.0...v2.4.0) (2020-08-11)


### Features

* **ci:**  add github lint action ([693a392](https://github.com/AndrewUsher/slack-pr-announcer/commit/693a392a4894906e293b90b51b652208ab5d1794))
* **ci:** add husky and lint command ([c3095d5](https://github.com/AndrewUsher/slack-pr-announcer/commit/c3095d5521741a15e39b183f66f201a24c5e7a2c))

## [2.3.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v2.2.0...v2.3.0) (2020-08-11)


### Features

* **pr:** add checkout instructions to message ([48c69c7](https://github.com/AndrewUsher/slack-pr-announcer/commit/48c69c7b8804112c0f5d2d6967addeb441368143))


### Bug Fixes

* **pr:** update indentation for message ([aaf2423](https://github.com/AndrewUsher/slack-pr-announcer/commit/aaf242308bd31d02dce9582d762da31fe9aa113f))
* **pr:** use correct ref for message ([d2e7901](https://github.com/AndrewUsher/slack-pr-announcer/commit/d2e790130c10e4348f108f5b70b49812fe7d4342))

## [2.2.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v2.1.0...v2.2.0) (2020-08-10)


### Features

* **pr:** add patch url to message ([c0102ae](https://github.com/AndrewUsher/slack-pr-announcer/commit/c0102aec001449f8389ed2da3ebe95c1efdaba38))
* **pr:** add title to message ([09005fe](https://github.com/AndrewUsher/slack-pr-announcer/commit/09005fe41990a199b2636d8d5f52143d6f3b6c8c))
* **pr:** only post open and closed PRs ([881eacc](https://github.com/AndrewUsher/slack-pr-announcer/commit/881eacc7906ddb931e370dd869e35d7054dee793))


### Bug Fixes

* **pr:** add early return to skipped PRs ([8e89ee7](https://github.com/AndrewUsher/slack-pr-announcer/commit/8e89ee7870d5ae0acb9afd026ed0dca2f11d79d1))
* **pr:** fix util call ([bd2a6bb](https://github.com/AndrewUsher/slack-pr-announcer/commit/bd2a6bb306afdacbdbe6856794bb54971cc6a98e))

## [2.1.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v2.0.0...v2.1.0) (2020-08-08)


### Features

* **pr:** add diff url to message ([83116d3](https://github.com/AndrewUsher/slack-pr-announcer/commit/83116d3e701de759e17774bdc5fa39f8468567d4))
* **pr:** add pull request description to message ([09dcc38](https://github.com/AndrewUsher/slack-pr-announcer/commit/09dcc38a0d781e72f53c5c42d0b2db4b9cfefd75))
* **pr:** add username to message ([ceecd89](https://github.com/AndrewUsher/slack-pr-announcer/commit/ceecd89b4a9b8aa0c0bed781dfcc6e78d0b6119f))
* **pr:** strip markdown from PR body ([08f6989](https://github.com/AndrewUsher/slack-pr-announcer/commit/08f6989ffe7b59ea9c91abee386cb189c1ba99fc))

## [2.0.0](https://github.com/AndrewUsher/slack-pr-announcer/compare/v1.0.0...v2.0.0) (2020-08-08)


### ⚠ BREAKING CHANGES

* **pr:** webhooks need to be updated to new endpoint

* **pr:** move to new /pr/[name] endpoint ([f07184e](https://github.com/AndrewUsher/slack-pr-announcer/commit/f07184e01853a1ff76bdd7e0f8b1e57b390eac39))

## 1.0.0 (2020-08-08)


### Features

* add eslint ([b17c1f0](https://github.com/AndrewUsher/slack-pr-announcer/commit/b17c1f082f532654265090e3ada2ffb1f6a8cafe))
* add PR link to message ([458d33a](https://github.com/AndrewUsher/slack-pr-announcer/commit/458d33a52a5381c016df7cc4fb2642ca32d0de87))
* add test endpoint ([3eb4d37](https://github.com/AndrewUsher/slack-pr-announcer/commit/3eb4d37c80c09fd361bb71150c86d8583756cfa9))
* add title to message ([0ea34e0](https://github.com/AndrewUsher/slack-pr-announcer/commit/0ea34e0b2e99e5544fb19d4f5fb406a538f2051a))
* initial announcer functionality ([94eeb4c](https://github.com/AndrewUsher/slack-pr-announcer/commit/94eeb4cba3b2e3abd32f9df4b7a5f5965862eaf7))
* switch to markdown format ([47ee730](https://github.com/AndrewUsher/slack-pr-announcer/commit/47ee73072caeecff6a833478556aff56bd7fc494))
