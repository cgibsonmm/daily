<script>
  import Nav from "../components/shared/navbar";

  export let segment;
</script>

<div class="font-mono bg-hangerBK h-screen w-screen max-w-screen">
  <Nav {segment} />

  <main class="container mx-auto">
    <slot />
  </main>
</div>

<style>
  /* your styles go here */
  :global(html) {
    font-size: 18px;
  }

  :global(.sora) {
    font-family: "Sora", sans-serif;
  }
  :global(.space-mono) {
    font-family: "Space Mono", monospace;
  }

  :global(.main-btn) {
    @apply bg-accent px-6 py-2 rounded space-mono uppercase font-base text-white;
  }

  :global(.sec-btn) {
    @apply bg-highlight px-6 py-2 rounded space-mono uppercase font-base text-white;
  }
</style>
