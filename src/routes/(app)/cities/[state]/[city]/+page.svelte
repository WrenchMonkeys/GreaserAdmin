<script lang="ts">
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/BreadCrumb.svelte';

  export let data;

  const services = [
    { name: 'Mobile Oil Change', price: 'from $75' },
    { name: 'Brake Service', price: 'from $150' },
    { name: 'Battery Replacement', price: 'from $120' },
    { name: 'Check Engine Light', price: 'from $89' },
    { name: 'Tire Service', price: 'from $65' },
    { name: 'General Diagnosis', price: 'from $99' }
  ];

  const breadcrumbItems = [
    { text: 'Service Areas', href: '/cities' },
    { text: `${data.city}, ${data.state}` }
  ];
</script>

<svelte:head>
  <title>Mobile Mechanic in {data.city}, {data.state} | MobileGreaser</title>
  <meta name="description" content="Professional mobile mechanics available 24/7 in {data.city}, {data.state}. On-demand auto repair at your location with upfront pricing. Book in minutes!" />
  <link rel="canonical" href={`https://mobilegreaser.com${$page.url.pathname}`} />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": `MobileGreaser Mobile Mechanic - ${data.city}`,
      "image": "YOUR_IMAGE_URL",
      "@id": `https://mobilegreaser.com${$page.url.pathname}`,
      "url": `https://mobilegreaser.com${$page.url.pathname}`,
      "telephone": "YOUR_PHONE",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": data.city,
        "addressRegion": data.state,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "YOUR_LAT",
          "longitude": "YOUR_LONG"
        },
        "geoRadius": "50000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    })}
  </script>
</svelte:head>

<main class="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <Breadcrumb items={breadcrumbItems} />
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Mobile Mechanic in {data.city}, {data.state}
      </h1>
      <p class="text-xl text-gray-600">
        Professional auto repair at your location
      </p>
    </header>

    <section class="bg-white shadow rounded-lg p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4">Service Area Information</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.serviceArea.radius}</span>
          <span class="text-gray-600">Service Radius</span>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.serviceArea.response}</span>
          <span class="text-gray-600">Average Response Time</span>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <span class="block text-lg font-medium text-gray-900">{data.serviceArea.availability}</span>
          <span class="text-gray-600">Availability</span>
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
        Download our app to book a certified mobile mechanic in {data.city} in minutes
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