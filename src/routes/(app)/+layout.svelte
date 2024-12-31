<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<SvelteToast />
<main class="min-h-screen flex flex-col">
  <div class="bg-base-200 mb-4 border-b border-b-gray-300">
    <div class="container mx-auto">
      <nav class="navbar flex-col md:flex-row sticky p-2 bg-base-200">
        <div class="md:navbar-start">
          <a class="btn btn-ghost normal-case text-xl whitespace-nowrap" href="/">Mobile Greaser</a>
          <a class="link link-hover p-2" aria-current="page" href="/">Home</a>
          <a class="link link-hover p-2" aria-current="page" href="/technician">Join as a technician</a>
        </div>
        <div class="navbar-center"></div>
        <div class="md:navbar-end mt-6 md:mt-0">
          <a href="https://www.producthunt.com/posts/mobile-greaser?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mobile&#0045;greaser" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=698022&theme=light" alt="Mobile&#0032;Greaser - Hassle&#0045;free&#0032;mobile&#0032;car&#0032;repairs&#0032;and&#0032;maintenance | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
          </a>
        </div>
      </nav>
    </div>
  </div>


  <slot/>

  <div class="bg-base-200  border-t border-t-gray-300 py-4">
    <div class="container mx-auto border">
      <footer class="py-3 flex flex-col md:justify-around">
        <div class="flex flex-col md:flex-row  md:justify-around">
          <div class="p-2 flex flex-col lg:justify-between">
            <h5 class="md:text-2xl text-xl font-bold tracking-tight mb-2">Mobile Greaser</h5>
            <p class="text-secondary">Copyright © 2023 Mobile Greaser Technologies, Inc. All rights reserved</p>
          </div>
          <div class="p-2 d-flex flex-col md:justify-between">
            <h5 class="font-bold mb-2">Company</h5>
            <p><a class="link link-hover link-primary" href="https://x.com/MobileGreaser">Twitter</a></p>
            <p><a class="link link-hover link-primary" href="https://www.tiktok.com/@mobile.greaser">TikTok</a></p>
            <p><a class="link link-hover link-primary" href="mailto:team@mobilegreaser.com">team@mobilegreaser.com</a></p>
            <p><a class="link link-hover link-primary" href="/blog">blog</a></p>
          </div>
          <div class="p-2 d-flex flex-column justify-content-lg-between">
            <h5 class="font-bold mb-2">Legal</h5>
            <p><a class="link link-hover link-primary" href="/legal/terms">Terms of Service</a></p>
            <p><a class="link link-hover link-primary" href="/legal/privacy">Privacy Policy</a></p>
          </div>
          <div class="p-2 d-flex flex-column justify-content-lg-between">
            <h5 class="font-bold mb-2">Help</h5>
            <p><a class="link link-hover link-primary" href="/help/delete-account">Delete Account</a></p>
          </div>
        </div>

        <div class="px-2 flex flex-col md:flex-row  md:justify-around my-9">
          <div class="flex flex-col md:flex-row items-baseline">
            <h5 class="font-bold mb-2 md:mr-4">Cities </h5>
            <ul class="list-inside text-sm flex flex-col md:flex-row justify-around md:items-center">
              <li class="list-item mb-1 md:mr-6"><a class="link link-primary link-hover " href="/cities/nevada/las-vegas">Las Vegas, NV</a></li>
              <li class="list-item mb-1 md:mr-6"><a class="link link-primary link-hover" href="/cities/nevada/mesquite">Mesquite, NV</a></li>
              <li class="list-item mb-1 md:mr-6"><a class="link link-primary link-hover" href="/cities/oklahoma/oklahoma-city">OKC, OK</a></li>
              <li class="list-item mb-1 md:mr-6"><a class="link link-primary link-hover" href="/cities/oklahoma/tulsa">Tulsa, OK</a></li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  </div>
</main>

