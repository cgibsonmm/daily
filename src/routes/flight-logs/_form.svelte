<script>
  export let closeForm;

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

  function createFlight() {
    null;
  }
</script>

<div class="bg-hangerLT">
  <form class="flex flex-col m-4">
    <label>
      Name of Flight
      <input />
    </label>
    <label>
      Name of Flight
      <input type="file" />
    </label>
    <label>
      Date
      <input type="date" />
    </label>
    <label>
      Rating
      <input type="selector" />
    </label>
  </form>
</div>
