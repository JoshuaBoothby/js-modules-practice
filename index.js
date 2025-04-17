"use strict";

import { add, multiply } from "./mathUtils.js";

import { capitalize } from "./stringUtils.js";

const sum = add(5, 10);
console.log(`The sum of 5 and 10 is: ${sum}`);

const product = multiply(4, 7);
console.log(`The product of 4 and 7 is: ${product}`);

const capitalizedString = capitalize("hello");
console.log(`The capitalized string is: ${capitalizedString}`);
