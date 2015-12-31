import test from 'ava';
import m from './';

test(t => {
	t.true(m('unicorn.txt'));
	t.true(m('unicorn.md'));
	t.true(m('unicorn.MD'));
	t.false(m('unicorn.png'));
	t.false(m('unicorn.zip'));
	t.false(m('unicornzip'));
});
