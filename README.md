# text files concatenation library


Description
===========

A concise library to concatenate text files. Files are concatenated in the order they are added in the array.

Installation
============

All local dependencies can be installed with npm using

	% npm install


Configuring
===========

No configuration needed


Uasge
=======


```javascript
const concat = require('concatenate-files');

concat([
	// Provide relative path
	'./source/first.txt',
	'./source/second.txt',

], './destination/first_second_concatenated.txt',  (err, result) => {
	console.log(result);
});
```
