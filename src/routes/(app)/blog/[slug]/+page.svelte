<script lang="ts">
  import Breadcrumb from "$lib/components/BreadCrumb.svelte";
  import { derived } from "svelte/store";
  import { page } from "$app/stores";

  export let data;

  $: component = data.content

  const breadcrumbItems = derived(page, ($pageData) => [
    { text: 'Blog', href: '/blog' },
    { text: `${data.slug}` }
  ]);

  const handleResourceDownload = (filename: string) => {
    const file = fetch(`/api/resources/${filename}`);


  }
</script>

<svelte:head>
  <title>Mobile Greaser | {data.meta.title}</title>
  <meta property="description" content={data.meta.description} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="keywords" content={data.meta.categories} />
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  <link rel="canonical" href={`https://mobilegreaser.com/blog/${data.slug}`}>
  <meta property="article:published_time" content={data.meta.date}>
  <meta property="article:modified_time" content={data.meta.date}>
  <meta property="article:author" content="MobileGreaser">
  <meta property="article:section" content="Auto Maintenance">
  <meta name="twitter:title" content={data.meta.title} />
  <meta name="twitter:description" content={data.meta.description} />
  {#if data.meta.image != null}
    <meta name="twitter:image" content={`https://mobilegreaser.com/${data.meta.image}`} />
    <meta name="twitter:card" content={`https://mobilegreaser.com/${data.meta.image}`}>
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
    {#if data.meta.resource != null}
      <div class="flex items-center justify-center mt-10">
        <a class="btn btn-primary bg-[#44D5B4] hover:bg-[#44D5B4] text-[#161A1D] transition-all duration-300 hover:scale-105 transform" target="_blank" href={`/api/resources/${data.meta.resource}`}>Click to download the resource</a>
      </div>
    {/if}
  </article>
</div>
