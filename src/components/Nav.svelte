<script>
  import { user, login } from "../routes/store/userStore.js";
  import { onMount } from "svelte";

  onMount(() => {
    login("cgibsonmm@gmail.com");
  });
</script>

<nav>
  <ul class="flex" sm="bg-red-200" lg="bg-blue-200">
    <li><a href=".">Daily hello</a></li>
    <li><a href="/profile">{$user.email}</a></li>
  </ul>
</nav>

<!-- Not Using for now -->
<!-- <ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->

<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul> -->
