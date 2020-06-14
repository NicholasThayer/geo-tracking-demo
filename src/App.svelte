<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
		integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
		crossorigin=""
	/>
</svelte:head>

<script>
	import LMap from './LMap.svelte'
	import { appClock as aClock } from './config';
	import { clock } from './util'
	const appClock =  clock( aClock )
	//import { map as lMap } from 'leaflet';
	//let name = 'world';
	//const mapEl = document.getElementById('mapid')
	//console.log('mapid? ', mapEl );
	//const mymap = l.map('mapid').setView([51.505, -0.09], 13);
	//console.log(map);

</script>
<LMap/>
