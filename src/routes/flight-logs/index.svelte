<script>
  import FlightLogForm from "./_form.svelte";
</script>

<div
  in:fly={{
    delay: 250,
    duration: 300,
    x: -1000,
    opacity: 0.1,
    easing: quintOut,
  }}
  out:fly={{
    delay: 250,
    duration: 300,
    x: 1000,
    opacity: 0.5,
    easing: quintOut,
  }}
  class="bg-gray-300 my-3 p-4 rounded sm:(w-3/4 mx-auto) md:(w-1/2) "
>
  <h2 class="text-2xl text-center underline">Flight Log</h2>
  <div class="relative h-70">
    {#if !formOpen}
      <div transition:blur={{ amount: 10 }} class="absolute w-full">
        <div>Total Logged Flights: 321</div>
        <div>Total logged hours: 7000</div>
        <div>Total engine hours: 250</div>
        <div>Days since last flight: 2</div>

        <div class="mx-auto">
          <button on:click={() => (formOpen = true)} class="blue-btn"
            >Log new flight</button
          >
        </div>
      </div>
    {:else}
      <div transition:blur={{ amount: 10 }} class="absolute w-full">
        <FlightLogForm {closeForm} />
      </div>
    {/if}
  </div>
</div>
