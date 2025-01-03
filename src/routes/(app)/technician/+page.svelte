<script>
  import {
    ChevronDown,
    LucideBadgeDollarSign,
    LucideClock, LucideWrench
  } from "lucide-svelte";
  import { toast } from '@zerodevx/svelte-toast'

  let isOpen = {}

  const faqs = [
    {
      question: "What are the requirements to be a technician with Mobile Greaser?",
      answer: "To wrench with Mobile Greaser, you must be at least 21 years old, have a valid driver's license, pass a background check, and have a clean driving record. You must also have all the tools necessary to perform the work."
    },
    {
      question: "How much can I earn as a Mobile Greaser technician?",
      answer: "Earnings vary based on your location, hours worked, and current demand."
    },
  ]

  async function handleSendEmail(e) {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, waitlist_id: 23036 }),
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
  }


</script>

<svelte:head>
  <title>Mobile Mechanic Jobs | Join Mobile Greaser | Top Pay & Flexible Hours</title>
  <meta name="description" content="Join Mobile Greaser as a mobile mechanic. Earn more with flexible hours, set your own schedule, and work independently. Top pay for skilled automotive technicians.">
  <meta name="keywords" content="mobile mechanic jobs, automotive technician, mobile car repair, mechanic careers, flexible mechanic work">

  <meta property="og:title" content="Mobile Mechanic Jobs | Join Mobile Greaser">
  <meta property="og:description" content="Be your own boss as a mobile mechanic. Earn more with flexible hours and full support from Mobile Greaser.">
  <meta property="og:image" content="/man_repair.jpg">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Join Mobile Greaser as a Mobile Mechanic">
  <meta name="twitter:description" content="Top-paying mobile mechanic opportunities with flexible hours and full support.">
  <meta name="twitter:image" content="/man_repair.jpg">
</svelte:head>

<main class="bg-white" itemscope itemtype="https://schema.org/JobPosting">
  <section class="relative bg-[#161A1D] text-white" aria-label="career-opportunity">
    <div class="absolute inset-0 bg-gradient-to-r opacity-90"></div>
    <div class="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div class="mb-12 lg:mb-0">
          <h1 class="text-4xl sm:text-center md:text-5xl font-bold mb-6" itemprop="title">
            Turn a Wrench with Mobile Greaser
          </h1>
          <p class="text-xl sm:text-center mb-8 text-purple-100" itemprop="description">
            Be your own boss, set your own hours, and achieve your goals with Mobile Greaser.
          </p>
          <form class="max-w-md mx-auto" on:submit|preventDefault={handleSendEmail} aria-label="job-application">
            <label for="email" class="sr-only">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email to be notified when we launch"
              class="w-full px-6 py-4 rounded-lg mb-4 text-gray-900"
              name="email"
              required
              aria-required="true"
            />
            <button type="submit" class="w-full bg-[#44D5B4] text-[#161A1D] font-semibold py-4 px-6 rounded-lg transition duration-300">
              Apply to work with us
            </button>
          </form>
        </div>
        <div class="container relative mx-auto">
          <img
            src="/man_repair.jpg"
            alt="Professional mobile mechanic working on a vehicle"
            class="rounded-lg shadow-2xl mx-auto"
            width="600"
            height="400"
            loading="eager"
            itemprop="image"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-50" aria-label="benefits" itemprop="benefits">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Why Work with Mobile Greaser?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="text-center p-6" itemprop="jobBenefit">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" aria-hidden="true">
            <LucideBadgeDollarSign class="w-8 h-8 text-[#161A1D]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Reliable Earnings</h3>
          <p class="text-gray-600">Make money reliably and achieve your financial goals as a mobile automotive technician.</p>
        </div>
        <div class="text-center p-6" itemprop="jobBenefit">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" aria-hidden="true">
            <LucideClock class="w-8 h-8 text-[#161A1D]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Flexible Schedule</h3>
          <p class="text-gray-600">Work whenever you want as an independent mobile mechanic, with full control over your hours.</p>
        </div>
        <div class="text-center p-6" itemprop="jobBenefit">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" aria-hidden="true">
            <LucideWrench class="w-8 h-8 text-[#161A1D]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Easy to Get Started</h3>
          <p class="text-gray-600">Quick onboarding process for qualified automotive technicians. Start earning quickly.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20" aria-label="requirements" itemprop="qualifications">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Requirements</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Technician Requirements</h3>
          <ul class="space-y-3 text-gray-600" itemprop="requirements">
            <li>• Minimum age: 21 years or older</li>
            <li>• Valid driver's license with clean driving record</li>
            <li>• Compatible smartphone for mobile app</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Required Documents</h3>
          <ul class="space-y-3 text-gray-600" itemprop="requirements">
            <li>• ASE certification or verified automotive experience</li>
            <li>• Current vehicle registration</li>
            <li>• Valid driver's license</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Required Tools</h3>
          <ul class="space-y-3 text-gray-600" itemprop="requirements">
            <li>• Professional automotive hand tools</li>
            <li>• Professional OBD Scanner and multimeter</li>
            <li>• Industry-standard safety equipment</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gray-50" aria-label="frequently asked questions">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="bg-white rounded-lg shadow" itemscope itemtype="https://schema.org/Question">
            <button
              class="w-full px-6 py-4 text-left flex justify-between items-center"
              on:click={() => isOpen[index] = !isOpen[index]}
              aria-expanded={isOpen[index]}
              itemprop="name"
            >
              <span class="font-semibold">{faq.question}</span>
              <ChevronDown
                class="w-5 h-5 transform transition-transform duration-300"
                aria-hidden="true"
              />
            </button>
            {#if isOpen[index]}
              <div class="px-6 py-4 text-gray-600 border-t" itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">
                <div itemprop="text">{faq.answer}</div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="bg-[#161A1D] text-white py-20" aria-label="application">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-8">Ready to Start Your Mobile Mechanic Career?</h2>
      <p class="text-xl mb-8 text-purple-100">Join our network of professional mobile mechanics and start earning on your terms.</p>
      <form class="max-w-md mx-auto" on:submit|preventDefault={handleSendEmail} aria-label="job-application">
        <label for="email-bottom" class="sr-only">Email address</label>
        <input
          type="email"
          id="email-bottom"
          placeholder="Enter your email to be notified when we launch"
          class="w-full px-6 py-4 rounded-lg mb-4 text-gray-900"
          name="email"
          required
          aria-required="true"
        />
        <button type="submit" class="w-full bg-[#44D5B4] text-[#161A1D] font-semibold py-4 px-6 rounded-lg transition duration-300">
          Apply to work with us
        </button>
      </form>
    </div>
  </section>
</main>
