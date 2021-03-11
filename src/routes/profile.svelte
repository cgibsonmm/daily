<script>
  import { user, logout } from "./store/userStore.js";
</script>

<div>
  {$user.email}
  <button on:click={() => logout()}>Logout</button>
</div>
