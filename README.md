filesize-parser
===============

Super simple module to take a human readable file size string and give you the byte representation of it.

```js
var filesizeParser = require('filesize-parser');

filesizeParser('200kb')
204800

filesizeParser('200KB')
204800

filesizeParser('200Kb')
25600
```

The default [base](https://en.wikipedia.org/wiki/Gigabyte#Base_2_definition) is `2`, you can use base `10`

```js
var filesizeParser = require('filesize-parser');

filesizeParser('200kb', {base: 10})
200000

filesizeParser('200KB', {base: 10})
200000

filesizeParser('200Kb', {base: 10})
25000
```
