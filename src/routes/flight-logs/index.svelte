<script>
  import Table from "../../components/flghtTable";
  import { getFlights } from "../../services/api";
  import Form from "./_form.svelte";
  let closeForm = false;

  function handleClick() {
    console.log(closeForm);
    closeForm = !closeForm;
  }
</script>

<div class="flex flex-col">
  <h1 class="space-mono text-2xl text-white text-center my-4 uppercase">
    Flight Logs
  </h1>
  <button on:click={handleClick} class="main-btn ml-auto">Upload Flight</button>
  {#if closeForm}
    <!-- content here -->
    <Table />
  {:else}
    <!-- else content here -->
    <Form />
  {/if}
</div>
