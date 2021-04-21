<script>
  export let data;
  export let i;
  const { title, items, price } = data;
</script>

<div class="w-1/2">
  <div class="bg-hangerLT p-4 rounded m-2 flex flex-col">
    <h3 class="text-2xl text-white mb-6">{title}</h3>
    {#each items as item}
      <!-- content here -->
      <div class="text-sub"><i>&tbrk;</i> {item}</div>
    {/each}
    {#if i == 0}
      <!-- content here -->
      <button class="main-btn mt-10 m-auto">${price}/Mth Subscribe</button>
    {:else}
      <button class="sec-btn mt-10 m-auto">${price}/Mth Subscribe</button>
    {/if}
  </div>
</div>
