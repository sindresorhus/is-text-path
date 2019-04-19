import test from 'ava';
import isTextPath from '.';

test('main', t => {
	t.true(isTextPath('unicorn.txt'));
	t.true(isTextPath('unicorn.md'));
	t.true(isTextPath('unicorn.MD'));
	t.false(isTextPath('unicorn.png'));
	t.false(isTextPath('unicorn.zip'));
	t.false(isTextPath('unicornzip'));
});
