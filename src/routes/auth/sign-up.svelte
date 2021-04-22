<script>
  import SignUp from "../../components/Auth/SignUp.svelte";
  import { createUser } from "../../services/auth";
  $: form = {
    email: "",
    password: "1234567",
    password_confirmation: "1234567",
  };

  async function handleClick() {
    let user = await createUser(form);
    console.log(user);
  }
</script>

<div>
  <h1 class="space-mono text-2xl text-white text-center my-4 uppercase">
    Sign Up
  </h1>
  <SignUp on:submit={handleClick} {form} />
</div>
