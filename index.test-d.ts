import {expectType} from 'tsd';
import isTextPath = require('.');

expectType<boolean>(isTextPath('src/unicorn.txt'));
