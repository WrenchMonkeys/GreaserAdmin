<script lang="ts">

  export let data;
</script>

<svelte:head>
  <title>Mobile Greaser | Blog</title>
</svelte:head>

<div class="container min-h-full mx-auto grow p-4">
  <section class="sm:my-4 md:my-8">
    <ul class="list-inside">
      {#each data.posts as post}
        <li class="list-item mt-8">
          <a href={'/blog/' + post.slug} class="link-accent"><h2 class="sm:text-xl lg:text-3xl">{post.title}</h2></a>
          <p class="text-sm">{post.description}</p>
          <p class="text-md">{post.date}</p>
        </li>
      {/each}
    </ul>
  </section>
</div>