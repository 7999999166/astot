import {writable} from 'svelte/store';

import Dexie from 'dexie';

  

 const db = new Dexie('myAppData');
 db.version(1).stores({ friends: '++id, name, age', });

 let product = writable(db);

export {product} ;















