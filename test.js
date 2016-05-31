var assert = require('assert');
var filesizeParser = require('./index.js');

//general usage
assert.equal(filesizeParser('1kb'), 1024);

//any casing should would
assert.equal(filesizeParser('1KB'), 1024);
assert.equal(filesizeParser('1mb'), 1024*1024);

//IEEE1541-style prefixes should work
assert.equal(filesizeParser('1KiB'), 1024);

//passing in ints should just return those ints
assert.equal(filesizeParser(100), 100);
assert.equal(filesizeParser('100'), 100);

//if you /reallllly/ want kilobits...
assert.equal(filesizeParser('1Kb'), 128);

//passing in bits should work
assert.equal(filesizeParser('1000b'), 125);
assert.equal(filesizeParser('1000bits'), 125);

//ignore whitespace, even stupid amounts of it
assert.equal(filesizeParser('1                     KB'), 1024);

//IEEE1541-prefix only should work
assert.equal(filesizeParser('1Ki'),1024);
assert.equal(filesizeParser('1Mi'),1048576);
assert.equal(filesizeParser('1Gi'),1073741824);
assert.equal(filesizeParser('1Ti'),1099511627776);
assert.equal(filesizeParser('1Pi'),1125899906842624);
assert.equal(filesizeParser('1Ei'),1152921504606846976);

//decimal notation should work
assert.equal(filesizeParser('2.5Ti'),2748779069440);

//comma as decimal separator should work
assert.equal(filesizeParser('2,5Ti'),2748779069440);

//lower case should work
assert.equal(filesizeParser('2ti'),2199023255552);

//don't return floating numbers
assert.equal(filesizeParser('2.156KiB'),2208);
assert.equal(filesizeParser('100.1'),100);
assert.equal(filesizeParser('100.6'),101);

//unknown units should throw an error
assert.throws(function() {filesizeParser('1pk');});

//nonsense should throw an error
assert.throws(function() {filesizeParser('I command thee to break');});

//empty input should throw an error
assert.throws(function() {filesizeParser('');});

// base 10
//general usage
assert.equal(filesizeParser('1kb', {base: 10}), 1000);

//any casing should would
assert.equal(filesizeParser('1KB', {base: 10}), 1000);

//IEEE1541-style prefixes should work
assert.equal(filesizeParser('1KiB', {base: 10}), 1000);

// Mega
//general usage
assert.equal(filesizeParser('1mb', {base: 10}), 1000000);

//period as decimal separator should work
assert.equal(filesizeParser('1.5mb', {base: 10}), 1500000);

//comma as decimal separator should work
assert.equal(filesizeParser('1,5mb', {base: 10}), 1500000);

//any casing should would
assert.equal(filesizeParser('1MB', {base: 10}), 1000000);

//IEEE1541-style prefixes should work
assert.equal(filesizeParser('1MiB', {base: 10}), 1000000);

//passing in ints should just return those ints
assert.equal(filesizeParser(100, {base: 10}), 100);
assert.equal(filesizeParser('100', {base: 10}), 100);

//if you /reallllly/ want kilobits...
assert.equal(filesizeParser('1Kb', {base: 10}), 125);

//ignore whitespace, even stupid amounts of it
assert.equal(filesizeParser('1                     KB', {base: 10}), 1000);

//IEEE1541-prefix only should work
assert.equal(filesizeParser('1Ki', {base: 10}),1000);
assert.equal(filesizeParser('1Mi', {base: 10}),1000000);
assert.equal(filesizeParser('1Gi', {base: 10}),1000000000);
assert.equal(filesizeParser('1Ti', {base: 10}),1000000000000);
assert.equal(filesizeParser('1Pi', {base: 10}),1000000000000000);
assert.equal(filesizeParser('1Ei', {base: 10}),1000000000000000000);

//don't return floating numbers
assert.equal(filesizeParser('2.1565Ki', {base: 10}),2157);

//unknown units should throw an error
assert.throws(function() {filesizeParser('1pk', {base: 10});});

//nonsense should throw an error
assert.throws(function() {filesizeParser('I command thee to break', {base: 10});});

//empty input should throw an error
assert.throws(function() {filesizeParser('', {baase: 10});});
