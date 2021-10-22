<script>
  import { grabGear } from "../../../services/api";
</script>

<div>
  {#await grabGear}
    <!-- promise is pending -->
    <div>Grabbing your Gear</div>
  {:then value}
    <!-- promise was fulfilled -->
  {/await}
  {#each items as item}
    <!-- content here -->
  {/each}
</div>
