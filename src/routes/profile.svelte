<script>
  import { user, logout } from "../store/userStore";
</script>

<div>
  {$user.email}
  <button on:click={() => logout()}>Logout</button>
</div>
