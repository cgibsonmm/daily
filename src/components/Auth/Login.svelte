<script>
  export let form;
</script>

<div class="w-1/2 mx-auto bg-hangerLT p-4 rounded">
  <form on:submit|preventDefault class="text-sub flex flex-col">
    <div class="flex flex-col mt-4">
      <label for="email">Email</label>
      <input bind:value={form.email} type="email" />
    </div>
    <div class="flex flex-col mt-4">
      <label for="password">Password</label>
      <input bind:value={form.password} type="password" />
    </div>
    <button
      type="submit"
      class="main-btn mx-auto mt-10 disabled:opacity-50 disabledrails :cursor-not-allowed"
      >Sign In</button
    >
  </form>
</div>
