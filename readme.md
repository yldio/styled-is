# styled-is

Flag utility for [`styled-components`](https://github.com/styled-components/styled-components).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Install

```
yarn add styled-is
```

## Usage

`is, isNot, isOr, isSomeNot` are used for boolean props and can check one or more props at a time `is(prop1, prop2, ...)`.

`match` is used to check the value of a prop `match(prop, value)`.

Functions can also be passed to all of the above to allow for more complex prop-checking. Any functions passed in will automatically be called with the component's props. For example if you wanted to handle a button with only an icon differently for different sizes:

```js
${match("size", "large")`
      font-size: 12px;
      ${props =>
        props.icon && !props.content
          ? `width: 3rem;`
          : `min-width: 6rem;`}
    `};

${match("size", "small")`
      font-size: 9px;
      ${props =>
        props.icon && !props.content
          ? `width: 1.5rem;`
          : `min-width: 3rem;`}
    `};
```

## Examples

```js
import is, { isNot, isOr, isSomeNot, match } from 'styled-is';
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

  ${match('size', 'large')`
    height: 64px;
  `};

  ${is('green')`
    background-color: green;
    ${(props) => (props.size === 'small' ? `width: 3rem;` : `width: 6rem;`)}
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

// display: block;
// opacity: 0;
// background-color: red;
// opacity: 1;
// float: left;
// position: relative;
// height: 64px;
<Div red left size='large'>

// display: block;
// opacity: 0;
// float: center;
// wat: 1;
// background-color: green;
// width: 6rem;
<Div green>

// display: block;
// opacity: 0;
// float: center;
// wat: 1;
// background-color: green;
// width: 3rem;
<Div green size='small'>

```

## License

MPL-2.0
