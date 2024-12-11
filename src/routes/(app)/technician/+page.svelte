<script>
  import { DollarSign, Clock, ChevronDown, WrenchIcon } from "lucide-svelte";
  import { env } from '$env/dynamic/public';

  let isOpen = {}

  const faqs = [
    {
      question: "What are the requirements to be a technician with Mobile Greaser?",
      answer: "To wrench with Mobile Greaser, you must be at least 21 years old, have a valid driver's license, pass a background check, and have a clean driving record. You must also have all the tools necessary to perform the work."
    },
    {
      question: "How much can I earn as a Mobile Greaser technician?",
      answer: "Earnings vary based on your location, hours worked, and current demand. Technicians keep 100% of their tips and can track their earnings in real-time through the app."
    },
  ]

  let email = "";
  let email2 = "";


  const handleSendEmail = () => {

  }


</script>

<div class="bg-white">
  <!-- Hero Section -->
  <section class="relative bg-[#161A1D] text-white">
    <div class="absolute inset-0 bg-gradient-to-r opacity-90"></div>
    <div class="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div class="mb-12 lg:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Turn a wrench with Mobile Greaser
          </h1>
          <p class="text-xl mb-8 text-purple-100">
            Be your own boss, set your own hours, and achieve your goals with Mobile Greaser.
          </p>
          <form class="max-w-md" on:submit|preventDefault={handleSendEmail}>
            <input
              type="email"
              placeholder="Enter your email to be notified when we launch"
              class="w-full px-6 py-4 rounded-lg mb-4 text-gray-900"
              bind:value={email}
            />
            <button type="submit" class="w-full bg-[#44D5B4] text-[#161A1D] font-semibold py-4 px-6 rounded-lg transition duration-300">
              Apply to work with us
            </button>
          </form>
        </div>
        <div class="container relative d-flex justify-center items-center">
          <img
            src="/dude_with_wrench.jpg"
            alt="Driver with car"
            class="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Why work with Mobile Greaser?</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 border-gray-800 rounded-full flex items-center justify-center">
            <DollarSign class="w-8 h-8 text-[#44D5B4]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Reliable Earnings</h3>
          <p class="text-gray-600">Make money reliably and achieve your financial goals.</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
            <Clock class="w-8 h-8 text-[#44D5B4]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Flexible Schedule</h3>
          <p class="text-gray-600">work whenever you want, as much as you want.</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
            <WrenchIcon class="w-8 h-8 text-[#44D5B4]" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Easy to Get Started</h3>
          <p class="text-gray-600">Sign up today and start earning in no time.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Requirements Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Requirements</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Technician Requirements</h3>
          <ul class="space-y-3 text-gray-600">
            <li>• 21 years or older</li>
            <li>• Clean driving record</li>
            <li>• Smartphone</li>
            <li>• ASE certification or equivalent experience</li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Documents Needed</h3>
          <ul class="space-y-3 text-gray-600">
            <li>• ASE certification or resume detailing experience</li>
            <li>• Vehicle registration</li>
            <li>• License</li>
          </ul>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Tools Needed</h3>
          <ul class="space-y-3 text-gray-600">
            <li>• Basic Hand Tools</li>
            <li>• OBD Scanner and multimeter</li>
            <li>• Safety Equipment</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="bg-white rounded-lg shadow">
            <button
              class="w-full px-6 py-4 text-left flex justify-between items-center"
              on:click={() => isOpen[index] = !isOpen[index]}
            >
              <span class="font-semibold">{faq.question}</span>
              <ChevronDown
                class="w-5 h-5 transform transition-transform duration-300"
              />
            </button>
            {#if isOpen[index]}
              <div class="px-6 py-4 text-gray-600 border-t">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-[#161A1D] text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-8">Ready to start earning?</h2>
      <p class="text-xl mb-8 text-purple-100">Sign up now and be on a job as soon as we launch.</p>
      <form class="max-w-md mx-auto" on:submit|preventDefault={handleSendEmail}>
        <input
          type="email"
          placeholder="Enter your email to be notified when we launch"
          class="w-full px-6 py-4 rounded-lg mb-4 text-gray-900"
          bind:value={email}
        />
        <button type="submit" class="w-full bg-[#44D5B4] text-[#161A1D] font-semibold py-4 px-6 rounded-lg transition duration-300">
          Apply to work with us
        </button>
      </form>
    </div>
  </section>
</div>