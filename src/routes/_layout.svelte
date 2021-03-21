<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="font-mono bg-hangerBK h-screen w-screen">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>

<style @global>
  html {
    font-size: 18px;
  }
  .sora {
    font-family: "Sora", sans-serif;
  }
  .space-mono {
    font-family: "Space Mono", monospace;
  }

  .main-btn {
    @apply bg-accent px-6 py-2 rounded space-mono uppercase font-base text-white;
  }
</style>
