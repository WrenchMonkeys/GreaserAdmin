<script>
  export let data;

  $: user = data?.user;
</script>

admin home page

<pre>
  {JSON.stringify(user, null, 2)}
</pre>