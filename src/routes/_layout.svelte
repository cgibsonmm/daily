<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<div class="font-mono">
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
