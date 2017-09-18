import { css } from 'styled-components';

export default (...names) => (...args) => props =>
  names.every(name => props[name]) ? css(...args) : css``;

export const isNot = (...names) => (...args) => props =>
  names.every(name => !props[name]) ? css(...args) : css``;

export const isOr = (...names) => (...args) => props =>
  names.some(name => props[name]) ? css(...args) : css``;

export const isSomeNot = (...names) => (...args) => props =>
  names.some(name => !props[name]) ? css(...args) : css``;
