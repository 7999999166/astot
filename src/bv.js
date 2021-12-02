import {writable} from 'svelte/store';

import './nedb.min.js';

var database1 = new Nedb({filename: 'Product.db', autoload: true });
var database2 = new Nedb({filename: 'order.db', autoload: true });
var database3 = new Nedb({filename: 'Review.db', autoload: true });


let product = writable(database1);
let order   = writable(database2);
let review  = writable(database3);
let counter = writable(0);
let totaly  = writable(0);


export {product , order , review , counter ,totaly}  ;
















