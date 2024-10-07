<script>
  import { page } from '$app/stores';

  export let data;

  $: applicationId = data.applicationId;
</script>

<div class="container mx-auto">
  {JSON.stringify(data, null, 2)}
  <h1 class="hero text-xl font-bold">Application ID: {applicationId}</h1>
</div>