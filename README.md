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
