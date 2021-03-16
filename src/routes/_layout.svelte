<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="font-mono bg-gray-100 h-screen w-screen">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>

<style @global>
  .blue-btn {
    @apply bg-blue-300 py-2 px-4 rounded mt-6;
  }
</style>
