<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Login from "../../components/Auth/Login.svelte";
  import { loginUser } from "../../services/auth";
  import { currentUser } from "../../store/userStore";

  onMount(() => {
    $currentUser ? goto("/") : null;
  });

  $: form = {
    email: "cgibsonmm@gmail.com",
    password: "1234567",
  };

  async function handleClick() {
    let user = await loginUser(form);
    if (user) {
      currentUser.setCurrentUser();
      goto("/");
    }
  }
</script>

<div>
  <h1 class="space-mono text-2xl text-white text-center my-4 uppercase">
    Sign In
  </h1>
  <Login on:submit={handleClick} {form} />
</div>
