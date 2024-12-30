<script lang="ts">
  import { page } from '$app/stores';

  const operatingCities = [
    {
      state: 'Oklahoma',
      cities: ['Oklahoma City', 'Tulsa'],
      description: 'Professional mobile mechanic services available throughout Oklahoma'
    },
    {
      state: 'Nevada',
      cities: ['Las Vegas', 'Mesquite', 'Henderson', 'Laughlin'],
      description: 'Expert mobile auto repair services across Nevada'
    }
  ];

  // Generate dynamic meta description
  const cityCount = operatingCities.reduce((acc, state) => acc + state.cities.length, 0);
  const metaDescription = `Find mobile mechanics in ${cityCount} cities across ${operatingCities.length} states. MobileGreaser offers 24/7 on-demand auto repair services with flat-rate pricing in ${operatingCities.map(state => state.state).join(' and ')}.`;
</script>

<svelte:head>
  <title>Mobile Mechanic Locations | MobileGreaser Service Areas</title>
  <meta name="description" content={metaDescription} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`https://mobilegreaser.com${$page.url.pathname}`} />

  <meta property="og:title" content="Mobile Mechanic Locations | MobileGreaser Service Areas" />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://mobilegreaser.com${$page.url.pathname}`} />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MobileGreaser",
      "url": `https://mobilegreaser.com${$page.url.pathname}`,
      "areaServed": operatingCities.map(state => ({
        "@type": "State",
        "name": state.state,
        "containsPlace": state.cities.map(city => ({
          "@type": "City",
          "name": city
        }))
      }))
    })}
  </script>
</svelte:head>

<main class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <header class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Mobile Mechanic Service Locations
      </h1>
      <p class="text-lg text-gray-600">
        Professional auto repair services at your location in {operatingCities.length} states
      </p>
    </header>

    <section class="bg-white shadow overflow-hidden sm:rounded-lg" aria-label="Service Areas">
      {#each operatingCities as { state, cities, description }}
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 class="text-2xl leading-6 font-medium text-gray-900 mb-2">{state} Service Areas</h2>
          <p class="text-gray-600 mb-4">{description}</p>

          <ul class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            {#each cities as city}
              <li class="col-span-1 bg-gray-50 rounded-lg shadow-sm p-4 hover:bg-gray-100 transition-colors duration-200">
                <a
                  href="/cities/{state.toLowerCase()}/{city.toLowerCase().replace(' ', '-')}"
                  class="block"
                  title="Mobile mechanic services in {city}, {state}"
                >
                  <div class="flex items-center space-x-3">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {city}, {state}
                      </p>
                      <p class="text-sm text-gray-500">
                        24/7 Mobile Auto Repair
                      </p>
                    </div>
                    <svg
                      class="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </section>

    <footer class="mt-8 text-center">
      <p class="text-gray-600">
        Need a mobile mechanic? Download our app to book service in any of our locations.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.mobilegreaser"
        class="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Download App
      </a>
    </footer>
  </div>
</main>