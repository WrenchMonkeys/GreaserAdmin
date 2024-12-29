<head>

</head>


<script lang="ts" defer>
  import googleBadge from '$lib/assets/google-play-badge.png';
  import appleBadge from '$lib/assets/apple-badge.svg'
  import posthog from "posthog-js";
  import { toast } from "@zerodevx/svelte-toast";
  import { onMount } from "svelte";
  import { fade, fly, scale, slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import CustomModal from '$lib/components/CustomModal.svelte';

  let isModalOpen = false;
  let visible = false;

  $: isLoading = false;

  const dispatch = createEventDispatcher();

  async function handleSendEmail(e) {
    isLoading = true;
    const formData = new FormData(e.target);
    const email = formData.get('email');
    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, waitlist_id: 23083 }),
      });

      if (response.ok) {
        toast.push('Signed up successfully!', {
          theme: {
            '--toastColor': 'mintcream',
            '--toastBackground': 'rgba(72,187,120,0.9)',
            '--toastBarBackground': '#2F855A'
          }
        })
      } else {
        toast.push('Failed to sign up to waitlist.', {
          theme: {
            '--toastBackground': 'red',
            '--toastColor': 'white',
            '--toastBarBackground': 'olive'
          }
        })
      }
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      isLoading = false;
    }
  }



  onMount(() => {
    const ctaobserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
        }
      },
      { threshold: 0.1 }
    );

    ctaobserver.observe(<Element>document.querySelector('#cta'));


    const htwObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
        }
      },
      { threshold: 0.1 }
    );

    htwObserver.observe(<Element>document.querySelector('#how-it-works'));

    const servicesObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
        }
      },
      { threshold: 0.1 }
    );

    servicesObserver.observe(<Element>document.querySelector('#services'));

    const trustObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
        }
      },
      { threshold: 0.1 }
    );

    trustObserver.observe(<Element>document.querySelector('#trust'));
  });

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Book Your Service',
      description: 'Tell us about your vehicle issues and select a convenient time. Our mobile mechanics are available 7 days a week.'
    },
    {
      number: 2,
      title: 'Mechanic Comes to You',
      description: 'Our certified mobile mechanics arrive at your location with all the necessary tools and parts.'
    },
    {
      number: 3,
      title: 'Get Back on the Road',
      description: 'Receive transparent pricing, expert service, and a detailed report of the work performed.'
    }
  ];

  const services = [
    {
      title: 'Emergency Services',
      description: 'Rapid response for battery replacements, tire repairs, starter issues, and other roadside emergencies.',
      icon: '🚨'
    },
    {
      title: 'Maintenance Services',
      description: 'Convenient mobile oil changes, brake service, tire rotations, and comprehensive vehicle inspections.',
      icon: '🔧'
    },
    {
      title: 'Diagnostic Services',
      description: 'Advanced diagnostic equipment to identify issues with clear explanations and upfront pricing.',
      icon: '🔍'
    }
  ];

  const trustFactors = [
    {
      title: 'Certified Mechanics',
      description: 'ASE-certified and thoroughly vetted professionals',
      icon: '👨‍🔧'
    },
    {
      title: 'Convenient Service',
      description: 'Service at your preferred location',
      icon: '📍'
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes with no hidden fees',
      icon: '💰'
    },
    {
      title: 'Service Guarantee',
      description: 'Parts and labor warranty included',
      icon: '✅'
    }
  ];

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }



</script>

<div class="container mx-auto">
  <div class="flex flex-col items-center md:flex-row ">
    <div class="hero h-screen max-h-[1200px] ">
      <div class="hero-content text-center">
        <div class="max-w-lg">
          <h1 class="text-3xl md:text-5xl font-bold">On Demand Mobile Mechanics</h1>
          <p class="py-6 text-secondary">Empower your vehicle care with Mobile Greaser—available anytime, anywhere, and tailored to your convenience.</p>
            <div class="my-auto flex flex-row justify-center align-middle items-center mt-4">
<!--              <a href="https://play.google.com/store/apps?gl=us" class="w-1/2 mw-200"><img class="mx-auto w-full" src={appleBadge} alt="apple marketplace badge"></a>-->
              <a href="https://play.google.com/store/apps/details?id=com.mobilegreaser" class=" md:w-1/3 mw-200"><img class="mx-auto w-full" src={googleBadge} alt="google marketplace badge"></a>
            </div>
        </div>
      </div>
    </div>
    <div class="p-3 flex align-middle d-flex justify-center align-items-center w-full md:w-1/2">
      <dotlottie-player src="https://lottie.host/2e1acaaf-5386-488f-8fe5-8e45aafa3c61/wug0qbTojd.json" background="transparent" speed="1" style="width: 400px; height: 400px;" loop autoplay></dotlottie-player>
    </div>
  </div>

  <div class="divider"></div>

  <section class=" py-20">
    {#if visible}
      <div class="container mx-auto px-4" in:fade={{ duration: 1000 }}>
        <h1 class="text-4xl md:text-5xl font-bold mb-6" in:fly={{ y: 50, duration: 1000 }}>
          Expert Mobile Mechanics at Your Location.
        </h1>
        <p class="text-xl mb-8 max-w-2xl" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
          Don't waste time at the auto shop. MobileGreaser brings certified mechanics directly to your home,
          office, or roadside. Get professional car repair and maintenance services
          with just a few taps.
        </p>
      </div>
    {/if}
  </section>

  <section id="how-it-works" class="py-16 bg-gray-100 bg-opacity-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">How MobileGreaser Works</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#if visible}
          {#each howItWorksSteps as step, i}
            <div
              class="bg-gray-50 bg-opacity-40 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              in:fade={{ duration: 800, delay: i * 200 }}
            >
              <div class="w-12 h-12 bg-[#44D5B4] text-[#161A1D] rounded-full flex items-center justify-center
                        text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 class="text-xl font-semibold mb-4">{step.title}</h3>
              <p class="text-gray-600">{step.description}</p>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>

  <section id="services" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Mobile Auto Repair Services</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#if visible}
          {#each services as service, i}
            <div
              class="bg-gray-50 bg-opacity-40 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              in:slide={{ duration: 800, delay: i * 200 }}
            >
              <div class="text-4xl mb-4">{service.icon}</div>
              <h3 class="text-xl font-semibold mb-4">{service.title}</h3>
              <p class="text-gray-600">{service.description}</p>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>




<!--  <div class="flex flex-col">-->
<!--    <div class="p-3 flex flex-col justify-center items-center mb-4">-->
<!--      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Save time at the shop</h2>-->
<!--      <div class="max-w-lg py-4 mx-auto">-->
<!--        <p class="text-secondary text-center">Join our clients to save time and money on your vehicle maintenance</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="w-full carousel rounded-box items-center py-2">-->
<!--      <div class="card card-bordered carousel-item bg-gray-100 shadow max-w-2xl mr-3">-->
<!--        <div class="card-body">-->
<!--          <h3 class="card-title text-xl text-center">-->
<!--            Lorem Ipsum-->
<!--          </h3>-->
<!--          <p class="overflow-ellipsis">-->
<!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card card-bordered carousel-item bg-gray-100 shadow max-w-2xl mr-3">-->
<!--        <div class="card-body">-->
<!--          <h3 class="card-title text-xl text-center">-->
<!--            Lorem Ipsum-->
<!--          </h3>-->
<!--          <p class="overflow-ellipsis">-->
<!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card card-bordered carousel-item bg-gray-100 shadow max-w-2xl mr-3">-->
<!--        <div class="card-body">-->
<!--          <h3 class="card-title text-xl text-center">-->
<!--            Lorem Ipsum-->
<!--          </h3>-->
<!--          <p class="overflow-ellipsis">-->
<!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card card-bordered carousel-item bg-gray-100 shadow max-w-2xl mr-3">-->
<!--        <div class="card-body">-->
<!--          <h3 class="card-title text-xl text-center">-->
<!--            Lorem Ipsum-->
<!--          </h3>-->
<!--          <p class="overflow-ellipsis">-->
<!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="divider"></div>-->

  <div class="divider"></div>

  <div class="flex flex-col md:flex-row-reverse items-center">
    <div class="p-3 flex flex-col justify-center w-full md:w-1/2">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Receive a comprehensive service overview</h2>
      <div class="max-w-lg py-4 mx-auto">
        <p class="text-secondary text-center">With each service, enjoy a complimentary 50-point inspection report included at no extra cost</p>
      </div>
    </div>
    <div class="p-3 flex align-middle items-center justify-center w-full md:w-1/2">
      <dotlottie-player src="https://lottie.host/e1eb53f3-f507-40b0-b5f0-00d6c13d3f22/XJAI2DpN49.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-col md:flex-row items-center">
    <div class="p-3 flex flex-col justify-center items-center w-full md:w-1/2">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Experience worry-free driving</h2>
      <div class="max-w-lg py-4">
        <p class="text-secondary text-center">Rest easy with our 5000-mile warranty on all services, ensuring peace of mind against any concerns about improper installation or faulty parts.</p>
      </div>
    </div>
    <div class="p-3 flex align-middle justify-center items-center w-full md:w-1/2">
      <dotlottie-player src="https://lottie.host/082f2a50-16c0-4549-a905-9154333fec51/0A79VM33Mw.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-col md:flex-row-reverse items-center">
    <div class="p-3 flex flex-col justify-center w-full md:w-1/2">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-3">Straightforward and budget-friendly rates</h2>
      <div class="max-w-lg py-4 mx-auto">
        <p class="text-secondary text-center">Embrace transparent pricing with our flat-rate system, eliminating concerns about unexpected upsells at the shop</p>
      </div>
    </div>
    <div class="p-3 flex align-middle items-center justify-center w-full md:w-1/2">
      <dotlottie-player src="https://lottie.host/cd76bc67-7005-48b6-9198-442bc1d3ff62/D4sO2a2uiY.json" background="transparent" speed="1" style="width: 400px; height: 400px;" loop autoplay></dotlottie-player>
    </div>
  </div>
</div>

<div class="divider"/>

<section id="trust" class="py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Why Choose MobileGreaser</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#if visible}
        {#each trustFactors as factor, i}
          <div
            class="text-center transform hover:scale-105 transition-all duration-300"
            in:scale={{ duration: 800, delay: i * 200 }}
          >
            <div class="text-4xl mb-4">{factor.icon}</div>
            <h3 class="text-xl font-semibold mb-4">{factor.title}</h3>
            <p class="text-gray-600">{factor.description}</p>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<div class="divider"/>


<section class="py-16 ">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-4">Experience MobileGreaser In Action</h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      See how easy it is to book a mobile mechanic in your area. Try our interactive booking process below.
    </p>
    <!--ARCADE EMBED START--><div class="aspect-[70/100] md:aspect-[130.543/100]" style="position: relative; height: 100%; max-height: 1200px; width: 100%;"><iframe src="https://demo.arcade.software/jMMhViE0XyIkIjzQaLdn?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true" title="Mobile Greaser Consumer App" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; max-height: 80vh; color-scheme: light;" ></iframe></div><!--ARCADE EMBED END-->

  </div>
</section>

<div class="divider"/>

<section id="cta" class=" py-16">
  {#if visible}
    <div class="container mx-auto px-4 text-center" in:fade={{ duration: 1000 }}>
      <h2 class="text-3xl font-bold mb-6" in:fly={{ y: 50, duration: 1000 }}>
        Ready for Hassle-Free Car Repair?
      </h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
        Join thousands of satisfied customers in Mesquite who trust MobileGreaser for their auto repair
        and maintenance needs. Schedule your service today or join our waitlist for priority access.
      </p>
      <button
        on:click={openModal}
        class="bg-[#44D5B4] text-[#161A1D] px-8 py-3 rounded-lg font-semibold hover:bg-[#44D5B4]
             transition-all duration-300 hover:scale-105 transform"
        in:fly={{ y: 50, duration: 1000, delay: 400 }}
      >
        Join Waitlist
      </button>
      <p class="text-md font-light my-2">or</p>

      <div in:fly={{ y: 50, duration: 1000, delay: 400 }} class="my-auto flex flex-row justify-center align-middle items-center mt-4 transition-all duration-300 hover:scale-105 transform">
        <!--              <a href="https://play.google.com/store/apps?gl=us" class="w-1/2 mw-200"><img class="mx-auto w-full" src={appleBadge} alt="apple marketplace badge"></a>-->
        <a href="https://play.google.com/store/apps/details?id=com.mobilegreaser" class=" md:w-1/3 mw-200"><img class="mx-auto w-full" src={googleBadge} alt="google marketplace badge"></a>
      </div>

    </div>
  {/if}
</section>


<div class="divider"></div>

<div class="flex flex-col items-center justify-center min-h-[800px] px-6">
  <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-center mb-4 pb-3">
    Frequently Asked Questions
  </h2>
  <div class="collapse bg-base-200 md:w-1/2 mb-4">
    <input type="radio" name="my-accordion-1" checked />
    <div class="collapse-title md:text-xl h1 font-medium">What is MobileGreaser?</div>
    <div class="collapse-content">
      <p class="font-light"><span class="font-semibold">MobileGreaser</span> is a platform that connects you with certified mobile mechanics who come to your location to perform car repairs and maintenance. Whether you’re at home, the office, or on the go, we make car care convenient, reliable, and stress-free.</p>
    </div>
  </div>
  <div class="collapse bg-base-200 md:w-1/2 mb-4">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title md:text-xl font-medium">How does it work?</div>
    <div class="collapse-content">
      <p>Using <span class="font-semibold">MobileGreaser</span> is simple:</p>
      <ol class="list-decimal ml-6 pt-2 pb-4">
        <li class="list-item">Download the app and create an account.</li>
        <li class="list-item">Create and customize your vehicle profile</li>
        <li class="list-item">Save a payment method on your account</li>
        <li class="list-item">Choose a service, time, payment method and location that’s convenient for you.</li>
        <li class="list-item">A certified mobile mechanic will come to you and perform the service.</li>
        <li class="list-item">Pay securely through the app when the job is done.</li>
      </ol>
    </div>
  </div>
  <div class="collapse bg-base-200 md:w-1/2 mb-4">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title md:text-xl font-medium">What services does <span class="font-semibold">MobileGreaser</span> offer?</div>
    <div class="collapse-content">
      <p>Our mechanics can handle a wide range of services, including: </p>
      <ol class="list-disc ml-6 pt-2 pb-4">
        <li class="list-item">Oil changes</li>
        <li class="list-item">Brake repairs</li>
        <li class="list-item">Battery replacement</li>
        <li class="list-item">Diagnostics and troubleshooting</li>
        <li class="list-item">Fluid top-ups</li>
        <li class="list-item">Tire changes and rotations</li>
        <li class="list-item">Roadside assistance</li>
      </ol>
      <p>and more.</p>
    </div>
  </div>
  <div class="collapse bg-base-200 md:w-1/2 mb-4">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title md:text-xl font-medium">Can I cancel or reschedule my booking?</div>
    <div class="collapse-content">
      <p>
        Yes! You can cancel or reschedule up to 1 hour before your appointment directly through the app. Review our cancellation policy for details on refunds or fees.
      </p>
    </div>
  </div>

  <div class="collapse bg-base-200 md:w-1/2 mb-4">
    <input type="radio" name="my-accordion-1" />
    <div class="collapse-title md:text-xl font-medium">Why should I choose <span class="font-semibold">MobileGreaser</span>?</div>
    <div class="collapse-content">
      <p>
        <span class="font-semibold">MobileGreaser</span> eliminates the hassle of traditional car repair by bringing expert mechanics directly to you. Our services are convenient, transparent, and affordable, with a 5000-mile warranty on all work. Experience the future of car care with <span class="font-semibold">MobileGreaser</span> today!
      </p>
    </div>
  </div>
</div>

<CustomModal isOpen={isModalOpen} on:close={closeModal}>
  <div class="flex flex-col">
    <div class="border-2 border-secondary border-dashed max-w-[800px] mx-auto p-5 rounded-md">
      <h2 class="font-semibold lg:text-3xl sm:text-1xl text-primary">Join the Future of On-Demand Vehicle Care!</h2>
      <p class="font-light text-secondary my-4 text-sm">Welcome to the future of Mobile Greaser! We're thrilled to have you join our community. By signing up, you'll be among the first to experience our innovative features and stay updated with the latest news. Thank you for your interest and support!</p>
      <form on:submit|preventDefault={handleSendEmail} class="w-full">
        <label for="email" class="label label-text text-primary text-lg">Email</label>
        <input id="email" type="text" name="email" class="input input-bordered w-full input-ghost input-md  rounded-md shadow-sm" placeholder="Enter Your Email Address" required />
        <button type="submit" class={"btn btn-outline btn-primary mt-6 " + (isLoading ? 'btn-disabled' : '') }>Submit</button>
      </form>
    </div>
  </div>
</CustomModal>




<style lang="scss">
  .mw-200 {
    max-width: 200px;
  }

  h1, h2, h5 {
    font-family: 'Bricolage Grotesque', sans-serif;
  }

</style>