/**
Check if a filepath is a text file.

@example
```
import isTextPath = require('is-text-path');

isTextPath('src/unicorn.txt');
//=> true

isTextPath('src/unicorn.png');
//=> false
```
*/
declare function isTextPath(filepath: string): boolean;

export = isTextPath;
