# is-text-path

> Check if a file path is a text file

## Install

```sh
npm install is-text-path
```

## Usage

```js
import isTextPath from 'is-text-path';

isTextPath('source/unicorn.txt');
//=> true

isTextPath('source/unicorn.png');
//=> false
```

## Related

- [`text-extensions`](https://github.com/sindresorhus/text-extensions) - List of text file extensions
- [`is-binary-path`](https://github.com/sindresorhus/is-binary-path) - Check if a file path is a binary file
