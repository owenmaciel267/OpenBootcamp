import {modifierNames, foregroundColorNames} from 'chalk';

console.log(modifierNames.includes('bold'));
//=> true
console.log(foregroundColorNames.includes("green"));

import * as controller from "./controller.js"
const sum = controller.sumando(2,2)
const multi = controller.multiplicando(2,2)

console.log(sum * 2);
console.log(multi);
