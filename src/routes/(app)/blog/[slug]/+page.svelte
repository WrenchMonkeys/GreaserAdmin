<script lang="ts">
  import Breadcrumb from "$lib/components/BreadCrumb.svelte";
  import { derived } from "svelte/store";
  import { page } from "$app/stores";

  const { data } = $$props

  $: component = data.content

  const breadcrumbItems = derived(page, ($pageData) => [
    { text: 'Blog', href: '/blog' },
    { text: `${data.slug}` }
  ]);
</script>

<svelte:head>
  <title>Mobile Greaser | {data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="keywords" content={data.meta.categories} />
  <meta name="author" content="MobileGreaser">
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  <link rel="canonical" href={`https://mobilegreaser.com/blog/${data.slug}`}>
  <meta property="article:published_time" content={data.meta.date}>
  <meta property="article:modified_time" content={data.meta.date}>
  <meta property="article:author" content="MobileGreaser">
  <meta property="article:section" content="Auto Maintenance">
  {#if data.meta.image != null}
    <meta name="twitter:image" content={`https://mobilegreaser.com/${data.meta.image}`} />
  {/if}
  {#if data.meta.tags != null}
    {#each data.meta.tags as tag}
      <meta property="article:tag" content={tag}/>
    {/each}
  {/if}

  <script type="application/ld+json" src="/api/posts/{data.slug}/schema"/>

</svelte:head>

<div class="container min-h-full mx-auto grow p-3">
  <Breadcrumb items={$breadcrumbItems} />
  <article class="sm:mt-4 md:mt-9 my-9">
    <hgroup class="mb-4">
      <h1 class="text-2xl lg:text-4xl font-semibold">{data.meta.title}</h1>
      <p class="text-sm my-2">{data.meta.description}</p>
      <p class="text-sm">Published at {data.meta.date}</p>
    </hgroup>

    <div class="tags">
      {#if data.meta.tags != null}
        {#each data.meta.tags as tag}
          <span class="badge badge-accent m-1 text-xs font-light ">&num;{tag}</span>

        {/each}
      {:else}
        <span class="badge badge-accent m-1 text-xs font-light ">#Mobile Mechanic</span>
      {/if}
    </div>
    <div class="prose mx-auto">
      <svelte:component this={component}/>
    </div>
  </article>
</div>
