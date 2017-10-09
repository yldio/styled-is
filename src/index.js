import { css } from 'styled-components';

const styledIf = (method, condition) => (...names) => (...args) => props =>
  names[method](name => Boolean(props[name]) === condition) && css(...args);

const is = styledIf('every', true);
const isNot = styledIf('every', false);
const isOr = styledIf('some', true);
const isSomeNot = styledIf('some', false);

export default is;
export { isNot, isOr, isSomeNot };
