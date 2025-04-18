# sillyname

A simple Node.js package that generates silly, random names.

## Installation

```bash
npm install sillyname

# Usage 

const sillyname = require('sillyname');

const mySillyName = sillyname();
console.log(mySillyName); // Output: Something like "bouncing_pickle"

const anotherSillyName = sillyname.randomAdjective() + '_' + sillyname.randomNoun();
console.log(anotherSillyName); // Output: Another silly combination