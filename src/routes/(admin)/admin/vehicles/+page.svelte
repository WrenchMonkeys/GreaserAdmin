<script>
  export let data;

  $: vehicles = data?.vehicles ?? [];

  $: console.log(vehicles[0]);
</script>

<main class="container mx-auto mt-4">
  <header>
    <h1 class="text-4xl font-bold tracking-tight">Vehicles</h1>
  </header>
  <div class="divider"></div>
  <div class="overflow-x-auto">
    <table class="table table-zebra table-auto">
      <thead>
      <tr>
        <th>ID</th>
        <th>Year</th>
        <th>Make</th>
        <th>Model</th>
        <th>Trim</th>
        <th>Engine</th>
        <th>Transmission</th>
        <th>Drivetrain</th>
      </tr>
      </thead>
      <tbody>
      {#await vehicles}
        <p>...loading</p>
      {:then value}
        {#each value as vehicle}
          <tr>
            <th>{vehicle.id}</th>
            <td>{vehicle.year}</td>
            <td>{vehicle.make}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.trim}</td>
            <td>{vehicle.engine}</td>
            <td>{vehicle.transmission}</td>
            <td>{vehicle.drivetrain}</td>
          </tr>
        {/each}
      {:catch error}
        <p>{error.message}</p>
      {/await}
      </tbody>
    </table>
  </div>
</main>
