## [2.6.1](https://github.com/LCluber/Ch.js/compare/v2.6.0...v2.6.1) (2019-08-10)


### Bug Fixes

* **readme:** updated description of the library ([f7d429f](https://github.com/LCluber/Ch.js/commit/f7d429f))

# [2.6.0](https://github.com/LCluber/Ch.js/compare/v2.5.0...v2.6.0) (2019-08-09)

### Features

- **isascii:** now accepts integers with string type ([140eba3](https://github.com/LCluber/Ch.js/commit/140eba3))

# [2.5.0](https://github.com/LCluber/Ch.js/compare/v2.4.0...v2.5.0) (2019-08-09)

### Features

- **isfloat:** now with type checking parameter ([d4bbc2b](https://github.com/LCluber/Ch.js/commit/d4bbc2b))

# [2.4.0](https://github.com/LCluber/Ch.js/compare/v2.3.1...v2.4.0) (2019-08-08)

### Features

- **isinteger:** now with type checking parameter ([38e64e5](https://github.com/LCluber/Ch.js/commit/38e64e5))

## [2.3.1](https://github.com/LCluber/Ch.js/compare/v2.3.0...v2.3.1) (2019-07-31)

### Bug Fixes

- **readme:** updated api reference ([192074a](https://github.com/LCluber/Ch.js/commit/192074a))

# [2.3.0](https://github.com/LCluber/Ch.js/compare/v2.2.0...v2.3.0) (2019-07-31)

### Features

- **html events:** added isHTMLEventAttribute method ([beaf7ac](https://github.com/LCluber/Ch.js/commit/beaf7ac))

# [2.2.0](https://github.com/LCluber/Ch.js/compare/v2.1.1...v2.2.0) (2019-07-21)

### Features

- **numbers:** added isEven, isOdd, isOrigin, isPositive, isNegative ([61db1c5](https://github.com/LCluber/Ch.js/commit/61db1c5))

## [2.1.1](https://github.com/LCluber/Ch.js/compare/v2.1.0...v2.1.1) (2019-07-16)

### Bug Fixes

- **isfunction:** returns false if parameter is null or 0 ([4000759](https://github.com/LCluber/Ch.js/commit/4000759))

# [2.1.0](https://github.com/LCluber/Ch.js/compare/v2.0.1...v2.1.0) (2019-07-16)

### Features

- **isnumber:** added isnumber() method ([6f57267](https://github.com/LCluber/Ch.js/commit/6f57267))

## [2.0.1](https://github.com/LCluber/Ch.js/compare/v2.0.0...v2.0.1) (2019-07-15)

### Bug Fixes

- **htmlelement:** & isnode return false with null parameter ([86ceeac](https://github.com/LCluber/Ch.js/commit/86ceeac))
- **isascii:** method fixed ([b3a74c0](https://github.com/LCluber/Ch.js/commit/b3a74c0))
- **isobject:** method now returns false with array parameter ([b4c4000](https://github.com/LCluber/Ch.js/commit/b4c4000))

# [2.0.0](https://github.com/LCluber/Ch.js/compare/v1.2.0...v2.0.0) (2019-07-14)

### Bug Fixes

- **package:** fix husky pre-push command ([0c3c50a](https://github.com/LCluber/Ch.js/commit/0c3c50a))

### Features

- **ch:** now exports functions instead of a static class ([e99066c](https://github.com/LCluber/Ch.js/commit/e99066c))

### BREAKING CHANGES

- **ch:** Is.string method replaced by isString function, Is.array method replaced by
  isArray... please see README.md for exhaustive documentation

# [1.2.0](https://github.com/LCluber/Ch.js/compare/v1.1.0...v1.2.0) (2019-07-08)

### Features

- **isboolean:** added Is.boolean() method ([250b9cf](https://github.com/LCluber/Ch.js/commit/250b9cf))

# 1.1.0 (June 19th 2019)

- Added Is.htmlElement() method
- Added Is.node() method

# 1.0.2 (June 03rd 2019)

- Improved Is.json() method

# 1.0.1 (June 02nd 2019)

- Updated README.md

# 1.0.0 (June 01st 2019)

- Deleted Mouette.js dependency
- Is.json() method now returns a boolean

# 0.1.2 (April 07th 2019)

- Updated README.md with documentation and Yarn install command

# 0.1.1 (February 17th 2019)

- added Is.array() check
- added Is.float() check

# 0.1.0 (December 23th 2018)

- Initial version from Wee.js
