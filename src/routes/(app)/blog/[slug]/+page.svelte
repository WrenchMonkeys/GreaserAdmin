<script lang="ts">
  const { data } = $$props

  $: component = data.content
</script>

<svelte:head>
  <title>Mobile Greaser | {data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="keywords" content={data.meta.categories} />
</svelte:head>

<div class="container min-h-full mx-auto grow my-9">
  <article class="sm:mt-4 md:mt-9">
    <hgroup class="mb-4">
      <h1 class="text-4xl font-semibold">{data.meta.title}</h1>
      <p class="text-sm">Published at {data.meta.date}</p>
    </hgroup>

    <div class="tags">
      <span class="badge badge-accent m-1 text-xs font-light ">&num; Mobile Mechanic</span>
    </div>
    <div class="prose">
      <svelte:component this={component}/>
    </div>
  </article>
</div>

<style lang="scss">
    article {
        max-inline-size: var(--size-content-3);
        margin-inline: auto;

        h1 {
            text-transform: capitalize;
        }

        h1 + p {
            margin-top: var(--size-2);
            color: var(--text-2);
        }

        .tags {
            display: flex;
            gap: var(--size-3);
            margin-top: var(--size-7);

            > * {
                padding: var(--size-2) var(--size-3);
                border-radius: var(--radius-round);
            }
        }
    }

    .prose {
      h1 {
        font-size: var(--size-6);
        margin-top: var(--size-9);
        margin-bottom: var(--size-3);

      }
      p {
        :not(:is(h2, h3, h4, h5, h6) + p) {
          margin-top: var(--size-7);
        }

        /* ignore paragraph tag around images */
        &:has(img) {
          display: contents;
        }
      }

      :is(h2, h3, h4, h5, h6) {
        margin-top: var(--size-8);
        margin-bottom: var(--size-3);
      }

      :is(ul, ol) {
        list-style-type: '🔥';
        padding-left: var(--size-5);
      }

      :is(ul, ol) li {
        margin-block: var(--size-2);
        padding-inline-start: var(--size-2);
      }

      pre {
        max-inline-size: 100%;
        padding: var(--size-3);
        border-radius: 8px;
        tab-size: 2;
      }
    }
</style>
