<script lang="ts">
  import { page } from '$app/stores';

  export let items: {
    text: string;
    href?: string;
  }[] = [];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": item.href ? `https://mobilegreaser.com${item.href}` : undefined,
        "name": item.text
      }
    }))
  };
</script>

<nav aria-label="Breadcrumb" class="mb-6">
  <script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>

  <ol class="flex items-center space-x-2 text-sm">
    <li>
      <a
        href="/"
        class="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Home"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
    </li>

    <li class="text-gray-400">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
      </svg>
    </li>

    {#each items as item, i}
      <li>
        {#if item.href && i < items.length - 1}
          <a
            href={item.href}
            class="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {item.text}
          </a>
        {:else}
          <span class="text-gray-900 font-medium" aria-current={i === items.length - 1 ? 'page' : undefined}>
            {item.text}
          </span>
        {/if}
      </li>

      {#if i < items.length - 1}
        <li class="text-gray-400">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
        </li>
      {/if}
    {/each}
  </ol>
</nav>