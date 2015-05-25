'use strict';
var test = require('ava');
var isTextPath = require('./');

test(function (t) {
	t.assert(isTextPath('unicorn.txt'));
	t.assert(isTextPath('unicorn.md'));
	t.assert(isTextPath('unicorn.MD'));
	t.assert(!isTextPath('unicorn.png'));
	t.assert(!isTextPath('unicorn.zip'));
	t.assert(!isTextPath('unicornzip'));
	t.end();
});
