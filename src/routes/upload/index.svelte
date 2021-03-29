<script>
  import { parseGPXFiles } from "../../services/parseFile";
  import TestMap from "../../routes/TestMap";

  let files = [];
  async function handleUpload(e) {
    files = await parseGPXFiles(e.target.files);
  }
</script>

<div>
  <input type="file" on:change={handleUpload} />
  <TestMap geoFiles={files} />
</div>
