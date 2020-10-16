// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const { default: is, isNot, isOr, isSomeNot, match } = require('.');
const test = require('ava');

test('should render only if prop is truthy', (t) => {
  const rule = is('test')`hello`;

  t.deepEqual(rule({ test: false }), false);
  t.deepEqual(rule({ test: true }), ['hello']);
});

test('should render only if prop is falsy', (t) => {
  const rule = isNot('test')`hello`;

  t.deepEqual(rule({ test: false }), ['hello']);
  t.deepEqual(rule({ test: true }), false);
});

test('should render only if all props are truthy', (t) => {
  const rule = is('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: true }), false);
  t.deepEqual(rule({ t1: true, t2: true }), ['hello']);
});

test('should render only if all props are falsy', (t) => {
  const rule = isNot('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: true }), false);
  t.deepEqual(rule({ t1: true, t2: true }), false);
});

test('should render only if one prop is truthy', (t) => {
  const rule = isOr('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: false }), false);
  t.deepEqual(rule({ t1: false, t2: true }), ['hello']);
  t.deepEqual(rule({ t1: true, t2: true }), ['hello']);
});

test('should render if at least one prop is falsy', (t) => {
  const rule = isSomeNot('t1', 't2')`hello`;

  t.deepEqual(rule({ t1: true, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: false }), ['hello']);
  t.deepEqual(rule({ t1: false, t2: true }), ['hello']);
  t.deepEqual(rule({ t1: true, t2: true }), false);
});

test('should render match is true', (t) => {
  const rule = match('test', 'lol')`hello`;

  t.deepEqual(rule({ test: 'one' }), false);
  t.deepEqual(rule({ test: 'lol' }), ['hello']);
});
