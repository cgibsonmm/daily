<script>
  import { Map, Marker } from "@beyonk/svelte-mapbox";
  let mapComponent;

  function onReady() {
    mapComponent.flyTo({ center: [40.7127281, -74.0060152] });
  }
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
</script>

<div class="h-screen">
  <Map
    accessToken="pk.eyJ1IjoiY2dpYnNvbm1tIiwiYSI6ImNrbWpqY3h2ZDBsb2Myb3J3bjdsamMycXoifQ.MW92fhSylae5dZkhQzu1QQ"
    style="mapbox://styles/mapbox/outdoors-v11"
    bind:this={mapComponent}
    on:ready={onReady}
  />
</div>

<style>
</style>
