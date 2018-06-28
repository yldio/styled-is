// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { css } from 'styled-components';

const styledIf = (method, condition) => (...names) => (...args) => props =>
  names[method](name => Boolean(props[name]) === condition) && css(...args);

const is = styledIf('every', true);
const isNot = styledIf('every', false);
const isOr = styledIf('some', true);
const isSomeNot = styledIf('some', false);

export default is;
export { isNot, isOr, isSomeNot };
