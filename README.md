[![version](https://img.shields.io/npm/v/getter.js.svg?label=version)](https://www.npmjs.org/package/getter.js) [![Build Status](https://img.shields.io/travis/Abdizriel/getter.js.svg?branch=master)](https://travis-ci.org/Abdizriel/getter.js/) [![Coverage](https://img.shields.io/coveralls/Abdizriel/getter.js.svg)](https://coveralls.io/github/Abdizriel/getter.js)

# Getter.js
The Promise based get object parameters for the modern browsers and node.

## Installation
```js
$ npm install --save getter.js
```

## Before
```js

var dataObj = {
  test: 'testString',
  test2: 'testString2',
  getTest: () => {
    const self = this;
    return new Promise(resolve => resolve(self.test));
  },
  getTest2: () => {
    const self = this;
    return new Promise(resolve => resolve(self.test2));
  }
}

dataObj
  .getTest()
  .then(response => console.log(response));


```

## After

```js
import getter from 'getter.js'

let dataObj = {
  test: 'testString',
  test2: 'testString2'
};
dataObj = getter(dataObj);

const asyncTestValue = await dataObj.getTest();


let config = {
  async: false,
  multiple: false
};
dataObj = getter(dataObj, config);
const testValue = dataObj.get('test');

```

## API

### getter({Object} Object, {Object} [Config])
Object - provided argument where you want to add get functions.
Config - provided configuration object for additional options
Config.async - default true - getter functions returns Promise
Config.multiple - default true - if true you would add to object x getKey functions if false you would get only get('key') function