# is-text-path [![Build Status](https://travis-ci.org/sindresorhus/is-text-path.svg?branch=master)](https://travis-ci.org/sindresorhus/is-text-path)

> Check if a file path is a text file


## Install

```
$ npm install is-text-path
```


## Usage

```js
const isTextPath = require('is-text-path');

isTextPath('source/unicorn.txt');
//=> true

isTextPath('source/unicorn.png');
//=> false
```


## Related

- [`text-extensions`](https://github.com/sindresorhus/text-extensions) - List of text file extensions
- [`is-binary-path`](https://github.com/sindresorhus/is-binary-path) - Check if a file path is a binary file


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-text-path?utm_source=npm-is-text-path&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
