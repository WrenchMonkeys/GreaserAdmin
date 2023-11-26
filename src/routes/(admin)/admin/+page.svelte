<script lang="ts">
  export let data;

  let error = '';
  $: user = data.user;
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
      <h1 class="card-title text-4xl font-bold tracking-tight">Dashboard</h1>
    </header>
    <div class="divider" />
  </div>
</main>
