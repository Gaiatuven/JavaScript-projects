// index.js

import generateName from "sillyname";
import superhero from '@fakerjs/superhero';

const name = superhero();
var sillyName = generateName();

console.log(`Hi, I'm ${name}, but my friends call me ${sillyName}`);