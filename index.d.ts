/**
Check if a file path is a text file.

@example
```
import isTextPath from 'is-text-path';

isTextPath('source/unicorn.txt');
//=> true

isTextPath('source/unicorn.png');
//=> false
```
*/
export default function isTextPath(filepath: string): boolean;
