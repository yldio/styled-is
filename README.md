# styled-is

[![npm](https://img.shields.io/npm/v/styled-is.svg?style=flat-square)](https://www.npmjs.com/package/styled-is)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=flat-square)](https://opensource.org/licenses/MPL-2.0)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Greenkeeper badge](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)

[![David](https://img.shields.io/david/dev/yldio/styled-is.svg?style=flat-square)](https://david-dm.org/yldio/styled-is?type=dev)
[![David](https://img.shields.io/david/peer/yldio/styled-is.svg?style=flat-square)](https://david-dm.org/yldio/styled-is?type=peer)

Flag utility for [`styled-components`](https://github.com/styled-components/styled-components).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```
yarn add styled-is
```

## Usage

```js
import is, { isNot, isOr, isSomeNot } from 'styled-is';
import styled from 'styled-components';

const Div = styled.div`
  display: block;
  opacity: 0;
  
  ${is('red')`
    background-color: red;
  `};

  ${is('blue')`
    background-color: blue;
  `};

  ${is('red', 'blue')`
    opacity: 1;
  `};

  ${is('left')`
    float: left;
  `};

  ${is('right')`
    float: right;
  `};

  ${isNot('left', 'right')`
    float: center;
  `};

  ${isOr('left', 'right')`
    position: relative;
  `};

  ${isSomeNot('red', 'left')`
    wat: 1;
  `};
`;

```
```js
// display: block;
// opacity: 0;
// float: center;
// wat: 1;
<Div>

// display: block;
// opacity: 0;
// background-color: red;
// opacity: 1;
// float: center;
// wat: 1;
<Div red>

// display: block;
// opacity: 0;
// background-color: red;
// opacity: 1;
// float: left;
// position: relative;
<Div red left>
```

## License

MPL-2.0
