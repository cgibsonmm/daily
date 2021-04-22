<script>
  // export const segment;
  import { currentUser } from "../../../store/userStore";
</script>

<!-- <svelte:window bind:innerWidth={width} /> -->

<nav class="bg-hangerLT">
  <div
    class=" container mx-auto flex items-center w-full justify-between bg-hangerLT py-4"
  >
    <a href="/"><img src="Glidelite.svg" alt="Glidelite logo" /></a>
    <div class="flex text-white items-center sora">
      <a class="mr-4" href="/flight-logs">Flight Log</a>
      <a class="mr-4" href="/upload">Maintenace</a>
      {#if $currentUser}
        <!-- content here -->
        <button on:click={currentUser.logoutUser}>{$currentUser.email}</button>
      {:else}
        <!-- else content here -->
        <a href="/auth/sign-up"><button class="main-btn">Sign Up</button></a>
        <a href="/auth/login"><button class="main-btn">Log In</button></a>
      {/if}
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
