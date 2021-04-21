<script>
  import { parseGPXFiles } from "../../services/parseFile";
  import { postFlight } from "../../services/api";
  import TestMap from "../../routes/TestMap";

  let files = [];
  async function handleUpload(e) {
    files = await parseGPXFiles(e.target.files);
  }

  async function handleSubmit() {
    let packet = { geoJson: files[0] };
    let res = await postFlight(packet);
    console.log(res);
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="file" on:change={handleUpload} />
    <button>Save Flight</button>
  </form>
  <TestMap geoFiles={files} />
</div>
