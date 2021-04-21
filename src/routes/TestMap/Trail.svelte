<script>
  export let geoFiles = [];
  import { getContext } from "svelte";
  import { contextKey } from "@beyonk/svelte-mapbox";

  const { getMap } = getContext(contextKey);
  let map = getMap();
  console.log(geoFiles);

  $: if (geoFiles.length > 0) {
    map.addSource("route", {
      type: "geojson",
      lineMetrics: true,
      data: geoFiles[0],
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        // "line-color": "#888",
        "line-width": 2,
        "line-color": "#7F5AF0",
      },
    });
  }
</script>
