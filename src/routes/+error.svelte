
<script>
  import { page } from '$app/stores';
</script>


<main class="flex justify-center items-center">
  {#if $page.error && $page.status === 404}
    <h1>404 - Page not found</h1>
    <dotlottie-player src="https://lottie.host/bdd6889c-e719-45d3-9cf5-4b61152c8872/xBACj3ljyp.json" background="transparent" speed="1" style="width: 50%; height: auto;" loop autoplay></dotlottie-player>
  {:else if $page.error}
    <h1>{$page.status} {$page.error.message}</h1>
  {/if}
</main>

<style lang="scss">
  main {
    min-height: 100vh;
  }
</style>