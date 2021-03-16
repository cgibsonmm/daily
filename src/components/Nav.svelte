<script>
  // export const segment;
  import { user, login } from "../store/userStore.js";
  import { onMount } from "svelte";
  let width;
  let dropdownOpen = false;
  onMount(() => {
    login("cgibsonmm@gmail.com");
  });
</script>

<svelte:window bind:innerWidth={width} />

<nav>
  <div class="flex justify-between bg-gray-400 items-center px-4">
    <a class="text-2xl m-4" href=".">ParaLog</a>

    {#if width > 900}
      <ul class="flex">
        <li class="m-4"><a href="/flight-logs">Flight Log</a></li>
        <li class="m-4"><a href="#">Maintanance</a></li>
        <li class="m-4"><a href="/profile">{$user.email}</a></li>
      </ul>
    {:else}
      <div on:click={() => (dropdownOpen = !dropdownOpen)}>small</div>
    {/if}
  </div>
</nav>

{#if dropdownOpen}
  <ul class="absolute let">
    <li class="m-4"><a href="/flight-logs">Flight Log</a></li>
    <li class="m-4"><a href="#">Maintanance</a></li>
    <li class="m-4"><a href="/profile">{$user.email}</a></li>
  </ul>
{/if}

<!-- Not Using for now -->
<!-- <ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul> -->
