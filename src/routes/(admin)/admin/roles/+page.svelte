<script>
  export let data;

  $: roles = data?.roles;
</script>

<main class="container mx-auto mt-4">
  <header>
    <h1 class="text-4xl font-bold tracking-tight">Roles</h1>
  </header>
  <div class="divider"></div>
  <div class="overflow-x-auto">
    <table class="table table-zebra table-auto">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      {#await roles}
        <p>...loading</p>
      {:then value}
        {#each value as role}
          <tr>
            <th>{role.id}</th>
            <th>{role.title}</th>
          </tr>
        {/each}
      {:catch error}
        <p>{error.message}</p>
      {/await}
      </tbody>
    </table>
  </div>
</main>