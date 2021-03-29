<script>
  export let geoFiles;
  import Trail from "./Trail.svelte";
  import { onMount, setContext } from "svelte";

  import { Map, contextKey } from "@beyonk/svelte-mapbox";

  setContext(contextKey, {
    getMap: () => mapComponent,
  });

  let mapComponent;
  let coords = [];

  function success(pos) {
    const crd = pos.coords;
    coords = [crd.longitude, crd.latitude];
    mapComponent.flyTo({ center: coords });
  }

  function error(e) {
    console.log(e);
  }

  onMount(async () => {
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
</script>

<div class="h-screen">
  <Map
    accessToken="pk.eyJ1IjoiY2dpYnNvbm1tIiwiYSI6ImNrbWpqY3h2ZDBsb2Myb3J3bjdsamMycXoifQ.MW92fhSylae5dZkhQzu1QQ"
    style="mapbox://styles/mapbox/outdoors-v11"
    bind:this={mapComponent}
  >
    <Trail {geoFiles} />
  </Map>
</div>

<style>
</style>
