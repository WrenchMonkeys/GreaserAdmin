<script lang="ts">
  export let data;

  let error = '';
  $: workOrders = data.streamed?.workOrders;
</script>

<main class="container mx-auto mt-4">
  {#if error}
    <div class="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
      >
      <span>{error}</span>
    </div>
  {/if}
  <div class="card card-normal p-2">
    <header class="card-header mb-3">
      <h1 class="card-title text-4xl font-bold tracking-tight">Work Orders</h1>
    </header>
    <div>
      <!--      <select class="select select-bordered w-full max-w-xs" bind:value={trim}>-->
      <!--        {#await data._?.trim}-->
      <!--          <option disabled selected>...loading</option>-->
      <!--        {:then years}-->
      <!--          <option disabled selected>Select Year</option>-->
      <!--          {#each years as year}-->
      <!--            <option value={year.value}>{year.value}</option>-->
      <!--          {/each}-->
      <!--        {/await}-->
      <!--      </select>-->
    </div>
    <div class="divider" />

    {#await workOrders}
      <p>...loading</p>
    {:then value}
      {#if value.length > 0}
      <table class="table table-zebra table-auto">
        <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Status</th>
          <th>Technician</th>
          <th>Is Providing Materials</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
        </thead>
        <tbody>
        {#each value as workOrder}
          <tr>
            <th>{workOrder.id}</th>
            <td>{workOrder.user_id}</td>
            <td>{workOrder.status}</td>
            <td>{workOrder.mechanic_id}</td>
            <td>{workOrder.is_providing_materials}</td>
            <td>{workOrder.created_at}</td>
            <td>{workOrder.updated_at}</td>
          </tr>
        {/each}
        </tbody>
      </table>
      {:else}
        <h2>
          No work orders found
        </h2>
      {/if}
    {:catch error}
      <p>{error.message}</p>
    {/await}
  </div>
</main>