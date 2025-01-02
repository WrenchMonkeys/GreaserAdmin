<script lang="ts">
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/BreadCrumb.svelte';
  import { derived } from "svelte/store";

  export let data;

  $: city = data.name ?? '';
  $: state = data.state ?? '';

  const services = [
    { name: 'Mobile Oil Change', price: 'from $75' },
    { name: 'Brake Service', price: 'from $150' },
    { name: 'Battery Replacement', price: 'from $120' },
    { name: 'Check Engine Light', price: 'from $89' },
    { name: 'Tire Service', price: 'from $65' },
    { name: 'General Diagnosis', price: 'from $99' }
  ];

  const breadcrumbItems = derived(page, ($pageData) => [
    { text: 'Service Areas', href: '/cities' },
    { text: `${$pageData.data.name}, ${$pageData.data.state}` }
  ]);
</script>

<svelte:head>
  <title>Mobile Mechanic in {city}, {state} | MobileGreaser</title>
  <meta name="description" content="Professional mobile mechanics available 24/7 in {city}, {state}. On-demand auto repair at your location with upfront pricing. Book in minutes!" />
  <link rel="canonical" href={`https://mobilegreaser.com${$page.url.pathname}`} />
  <meta name="geo.region" content={data.geoRegion}>
  <meta name="geo.placename" content={data.name}>
  <meta name="geo.position" content={`${data.lat};${data.long}`}>
  <meta name="ICBM" content={`${data.lat}, ${data.long}`}>

  <script type="application/ld+json" src="{`/api/cities/${data.state}/${data.name}/schema`}"/>
</svelte:head>

<main class="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
  <Breadcrumb items={$breadcrumbItems} />
  <div class="max-w-4xl mx-auto py-12">
    {#if data.image}
      <img src={data.image} class="mb-9 border rounded-lg mx-auto image-full" alt={`${data.name}, ${data.state}`} />
    {/if}
    <header class="text-center mb-12">
      <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        Mobile Mechanic in {city}, {state}
      </h1>
      <p class="text-xl text-gray-600">
        Professional auto repair at your location
      </p>
    </header>

    <section class="bg-white shadow rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4">Service Area Information</h2>
      <div class="grid md:grid-cols-4 gap-6">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.area}</span>
          <span class="text-gray-600">Service Radius</span>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.averageResponseTime}</span>
          <span class="text-gray-600">Average Response Time</span>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">24/7</span>
          <span class="text-gray-600">Availability</span>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.activePartners}</span>
          <span class="text-gray-600">Partnered mechanic's</span>
        </div>
      </div>
    </section>

    <section class="bg-white shadow rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-6">Our Services</h2>
      <div class="grid md:grid-cols-2 gap-4">
        {#each services as service}
          <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span class="font-medium">{service.name}</span>
            <span class="text-gray-600">{service.price}</span>
          </div>
        {/each}
      </div>
    </section>

    <section class="text-center">
      <h2 class="text-2xl font-semibold mb-4">Ready to Book a Mobile Mechanic?</h2>
      <p class="text-gray-600 mb-6">
        Download our app to book a certified mobile mechanic in {city} in minutes
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.mobilegreaser"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#161A1D] bg-[#44D5B4] hover:bg-[#44D5B4] transition-all duration-300 hover:scale-105 transform"
      >
        Download MobileGreaser App
      </a>
    </section>
  </div>
</main>