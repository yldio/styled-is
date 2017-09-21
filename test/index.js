const { default: is, isNot, isOr, isSomeNot } = require('../');
const test = require('ava');

test('should render only if prop is truthy', t => {
  const rule = is('test')`hello`;

  t.deepEqual(rule({ test: false }), false);
  t.deepEqual(rule({ test: true }), ['hello']);
});

test('should render only if prop is falsy', t => {
  const rule = isNot('test')`hello`;

  t.deepEqual(rule({ test: false }), ['hello']);
  t.deepEqual(rule({ test: true }), false);
});

test('should render only if all props are truthy', t => {
  const rule = is('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: true }), false);
  t.deepEqual(rule({ t1: true, t2: true }), ['hello']);
});

test('should render only if all props are falsy', t => {
  const rule = isNot('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: true }), false);
  t.deepEqual(rule({ t1: true, t2: true }), false);
});

test('should render only if one prop is truthy', t => {
  const rule = isOr('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: true }), ['hello']);
  t.deepEqual(rule({ t1: true, t2: true }), ['hello']);
});

test('should render only if one prop is falsy', t => {
  const rule = isSomeNot('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: true }), ['hello']);
  t.deepEqual(rule({ t1: true, t2: true }), false);
});
