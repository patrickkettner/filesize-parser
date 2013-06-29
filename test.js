var assert = require('assert');
var filesizeParser = require('./index.js');

//general usage
assert.equal(filesizeParser('1kb'), 1024);

//any casing should would
assert.equal(filesizeParser('1KB'), 1024);

//passing in ints should just return those ints
assert.equal(filesizeParser(100), 100);
assert.equal(filesizeParser('100'), 100);

//if you /reallllly/ want kilobits...
assert.equal(filesizeParser('1Kb'), 128);

//ignore whitespace, even stupid amounts of it
assert.equal(filesizeParser('1                     KB'), 1024);

//unknown units should throw an error
assert.throws(function() {filesizeParser('1pk');});

//nonsense should throw an error
assert.throws(function() {filesizeParser('I command thee to break');});

//empty input should throw an error
assert.throws(function() {filesizeParser('');});
