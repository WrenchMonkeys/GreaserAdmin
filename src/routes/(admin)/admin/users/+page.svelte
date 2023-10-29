<script>
  export let data;

  $: users = data?.users;
</script>

<main class="container mx-auto mt-4">
  <header>
    <h1 class="text-4xl font-bold tracking-tight">Users</h1>
  </header>
  <div class="divider"></div>
  <div class="overflow-x-auto">
    <table class="table table-zebra table-auto">
      <!-- head -->
      <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Verified Email</th>
        <th>Phone Number</th>
        <th>Verified Phone</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Created Date</th>
        <th>Updated Date</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
      {#await users}
        <p>...loading</p>
        {:then value}
          {#each value as user}
            <tr>
              <th>{user.id}</th>
              <td>{user.email}</td>
              <td>{!!user.emailVerified}</td>
              <td>{user.phoneNumber}</td>
              <td>{!!user.phoneNumberVerified}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
            </tr>
          {/each}
        {:catch error}
          <p>{error.message}</p>
      {/await}
      </tbody>
    </table>
  </div>
</main>
