import {expectType} from 'tsd';
import isTextPath = require('.');

expectType<boolean>(isTextPath('source/unicorn.txt'));
