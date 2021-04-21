<script>
  import TableHead from "./tableHead";
  import TableRow from "./tableRow";

  let data = [{ name: "Flight 1" }];
</script>

<table class="table-auto border-collapse mx-auto mt-4">
  <TableHead />
  <tbody class="space-mono font-light text-sm text-sub" />
  {#each data as row}
    <!-- content here -->
    <TableRow flight={row}/>
  {/each}
</table>
