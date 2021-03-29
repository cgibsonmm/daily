<script>
  // export const segment;
</script>

<!-- <svelte:window bind:innerWidth={width} /> -->

<nav>
  <div class="flex items-center w-full justify-between bg-hangerLT px-6 py-4">
    <a href="/"><img src="Glidelite.svg" alt="Glidelite logo" /></a>
    <div class="flex text-white items-center sora">
      <a class="mr-4" href="/flight-logs">Flight Log</a>
      <a class="mr-4" href="/upload">Maintenace</a>
      <button class="main-btn">Sign Up</button>
    </div>
  </div>
</nav>

<!-- {#if dropdownOpen}{/if} -->

<!-- Not Using for now -->
<!-- <ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->

<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul> -->
