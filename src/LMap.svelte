<style>
	#mapid {
		height: 512px;
		width: 512px;
	}
</style>

<script>
	import { onMount } from 'svelte';
	import * as l from 'leaflet';
	import { mapboxToken } from './conf';

	const urlTemp = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
	const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

	onMount(() => {
		let mymap = l.map('mapid').setView([51.505, -0.09], 13);
		l.tileLayer( urlTemp, {
	    attribution,
	    maxZoom: 18,
	    id: 'mapbox/streets-v11',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: mapboxToken,
		}).addTo(mymap);
	})
	//import * as leaflet from './leaflet.svelte'
	//import leaflet from './leaflet.svelte'
	//import './leaflet.svelte'
	//var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	//var mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);
</script>

<div id="mapid"></div>
