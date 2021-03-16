<script>
  export let closeForm;

  function createFlight() {
    null;
  }
</script>

<div>
  <label class="block">
    <span class="text-gray-700">Enter Flight Name</span>
    <input type="text" class="basic-form" placeholder="" />
  </label>
  <label class="block">
    <span class="text-gray-700">Enter Flight Date</span>
    <input type="date" class="basic-form" placeholder="" />
  </label>
  <label class="block">
    <span class="text-gray-700">Enter Flight Time In Minutes</span>
    <input type="number" class="basic-form" placeholder="30" />
  </label>
  <button class="blue-btn" on:click={createFlight}>Create flight</button>
  <button class="blue-btn" on:click={closeForm}>Close Form</button>
</div>

<style>
  .basic-form {
    @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
  }
</style>
