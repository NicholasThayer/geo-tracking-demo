<svelte:head>
</svelte:head>
<style>
	#mapid { height: 180px; }
</style>


<div id="mapid"></div>

<script>
	import * as l from 'leaflet';
	import { onMount } from 'svelte'

	onMount(() => {
		const mymap = l.map('mapid').setView([51.505, -0.09], 13);
		
	})
	//import { map as lMap } from 'leaflet';
	//let name = 'world';
	//const mapEl = document.getElementById('mapid')
	//console.log('mapid? ', mapEl );
	//const mymap = l.map('mapid').setView([51.505, -0.09], 13);
	//console.log(map);

</script>



<h1>Hello {name}!</h1>
