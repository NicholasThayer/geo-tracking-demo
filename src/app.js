
import {
	applyTo,
	values,
	curry,
	memoizeWith,
	identity,
} from 'ramda'

import LMap from './LMap.svelte'
import { appClock as aClock } from 'config';// './config';
import {
  getClock,

} from './util'

const fnObj = {cnt:0}
const memFn = memoizeWith(
	identity,
	(id, a, b, cntObj ) =>{
		console.log( a, b,
      ( cntObj.cnt = cntObj.cnt +1 ) && cntObj
    );
    return cntObj;
	}
)

console.log(memFn( 'a', 1,2, fnObj ));
console.log(memFn( 'a', 3, 4, fnObj ));
console.log(memFn( 'a' ));

export const makeAppClock = () =>
  applyTo( values( aClock ), getClock )
