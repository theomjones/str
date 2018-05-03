# `stringlib` - a small JS string library for the browser and Node (WIP).

![build status](https://api.travis-ci.org/theomjones/str.svg?branch=master)

### Install

```shell
yarn add @theomjones/stringlib
# OR
npm install @theomjones/stringlib --save
```

### Usage

```js
//ES6
import s from '@theomjones/stringlib';

// Node
const s = require('@theomjones/stringlib');
```

### API

```js
// Assert input is a string.
str.assertString(String);

// Capitalize the first letter of a string.
str.capitalize(String);

// Uncapitalize the first letter of a string.
str.uncapitalize(String);

// Reverse a string
str.reverse(String);

// Turn a string into a slug
str.slugify(String);

// Turn a string into a title
// e.g. the lion the witch and the wardrobe => The Lion the Witch and the Wardrobe
str.titleize(String);
```
