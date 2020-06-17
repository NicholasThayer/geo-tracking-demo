<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
		integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
		crossorigin=""
	/>
</svelte:head>

<script>
	import { makeAppClock } from './app'
	import LMap from './LMap.svelte'

	const obj = {i:0}

	$: console.log();

	//import { appClock as aClock } from './config';
	//import { getClock } from './util'
	//import {
	//	applyTo,
	//	values,
	//	curry,
	//	memoizeWith,
	//	identity,
	//} from 'ramda'
	//
	//const appClock = applyTo( values( aClock ), getClock )
	//const fnObj = {cnt:0}
	//const memFn = memoizeWith(
	//	identity,
	//	(id, a, b, cntObj ) =>{
	//		console.log( a, b, cntObj, );
	//	}
	//)
</script>
<LMap/>
