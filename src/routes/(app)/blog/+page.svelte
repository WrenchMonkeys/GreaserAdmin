<script lang="ts">

  export let data;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };
</script>

<svelte:head>
  <title>Mobile Greaser Blog | Auto Repair Tips & Industry Insights</title>
  <meta name="description" content="Expert automotive repair tips, industry insights, and mechanic resources from Mobile Greaser. Stay updated with the latest in mobile auto repair technology and best practices." />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Mobile Greaser Blog" />
  <meta property="og:title" content="Mobile Greaser Blog | Auto Repair Tips & Industry Insights" />
  <meta property="og:description" content="Expert automotive repair tips, industry insights, and mechanic resources from Mobile Greaser." />
  <meta property="og:url" content="https://mobilegreaser.com/blog" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mobile Greaser Blog | Auto Repair Tips & Industry Insights" />
  <meta name="twitter:description" content="Expert automotive repair tips, industry insights, and mechanic resources from Mobile Greaser." />

  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="language" content="English" />
  <link rel="canonical" href="https://mobilegreaser.com/blog" />

  <meta name="keywords" content="auto repair blog, mechanic tips, car maintenance, mobile mechanic, automotive repair, DIY car repair, professional mechanic advice" />
</svelte:head>

<main class="container min-h-full mx-auto grow px-4 py-8 md:py-12" itemscope itemtype="https://schema.org/Blog">
  <header class="mb-12">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" itemprop="name">
      Mobile Greaser Blog
    </h1>
    <p class="text-lg text-gray-600 max-w-2xl" itemprop="description">
      Expert insights, automotive repair tips, and industry updates from professional mobile mechanics.
    </p>
  </header>

  <section class="max-w-4xl" aria-label="blog posts">
    <ul class="space-y-8 md:space-y-12">
      {#each data.posts as post}
        <li class="article-preview" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
          <article class="group">
            <a
              href={'/blog/' + post.slug}
              class="block hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200"
              itemprop="url"
            >
              <h2
                class="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-200"
                itemprop="headline"
              >
                {post.title}
              </h2>
              <p
                class="text-gray-600 mb-3 line-clamp-2"
                itemprop="description"
              >
                {post.description}
              </p>
              <div class="flex items-center text-sm text-gray-500">
                <time
                  datetime={formatDate(post.date)}
                  itemprop="datePublished"
                  class="mr-4"
                >
                  {formatDate(post.date)}
                </time>
                {#if post.readingTime}
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readingTime} min read
                  </span>
                {/if}
              </div>
            </a>
          </article>
        </li>
      {/each}
    </ul>
  </section>
</main>
