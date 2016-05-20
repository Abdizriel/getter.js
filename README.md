[![version](https://img.shields.io/npm/v/parameters-getter.js.svg?label=version)](https://www.npmjs.org/package/parameters-getter.js) [![Build Status](https://img.shields.io/travis/Abdizriel/getter.js.svg?branch=master)](https://travis-ci.org/Abdizriel/getter.js/) [![Coverage](https://img.shields.io/coveralls/Abdizriel/getter.js.svg)](https://coveralls.io/github/Abdizriel/getter.js)

# Getter.js
The Promise based get object parameters for the modern browsers and node.

## Why
In ES7 `async`/`await` is awesome, but that only supported with Promise.

## Installation
```js
npm i --save parameters-getter.js
```

Includes `babel-polyfill` before use `async` and `await`


## Before
```js

var dataObj = {
  test: 'testString',
  test2: 'testString2',
  getTest: function() {
    var self = this;
    return new Promise(function(resolve) {
      resolve(self.test);
    }
  },
  getTest2: function() {
    var self = this;
    return new Promise(function(resolve) {
      resolve(self.test2);
    }
  }
}

dataObj
  .getTest()
  .then(function(response) {
    console.log(response);
  });


```

## After

```js
import getter from 'parameters-getter'

let dataObj = {
  test: 'testString',
  test2: 'testString2'
};
dataObj = getter(dataObj);

const testValue = await dataObj.getTest();

```

## API

### getter(Object)
Object - provided argument where you want to add get functions.