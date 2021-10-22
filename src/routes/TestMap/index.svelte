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
    console.log(pos);
    const crd = pos.coords;
    coords = [crd.longitude, crd.latitude];
    mapComponent.flyTo({ center: coords });
  }

  function error(e) {
    console.log(e);
  }

  onMount(() => {
    console.log("HERE");
    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
</script>

<div class="h-screen">
  <Map
    accessToken="pk.eyJ1IjoiY2dpYnNvbm1tIiwiYSI6ImNrbWpqY3h2ZDBsb2Myb3J3bjdsamMycXoifQ.MW92fhSylae5dZkhQzu1QQ"
    style="mapbox://styles/cgibsonmm/ck5h8a5vw06le1ilmgqtcebba"
    bind:this={mapComponent}
  >
    <Trail {geoFiles} />
  </Map>
</div>

<style>
</style>
