<div class="bg-base-200">
  <div class="container mx-auto ">
    <nav class="navbar  p-2 mb-4">
      <div>
        <a class="btn btn-ghost w-full normal-case text-xl whitespace-nowrap" href="/">Mobile Greaser</a>
      </div>
      <div class="navbar-start">
        <a class="link link-hover  p-2" aria-current="page" href="/">Home</a>
      </div>
      <div class="navbar-center">
      </div>
      <div class="navbar-end">
      </div>
    </nav>
  </div>
</div>



<slot/>

<div class="bg-base-200">
  <div class="container mx-auto border">
    <footer class="py-3 flex flex-col md:flex-row  md:justify-around">
      <section class="p-2 flex flex-col lg:justify-between">
        <h5 class="md:text-2xl sm:text-xl font-bold tracking-tight mb-2">Mobile Greaser</h5>
        <p class="text-secondary">Copyright © 2023 Mobile Greaser, Inc. All rights reserved</p>
      </section>
      <section class="p-2 d-flex flex-col md:justify-between">
        <h5 class="font-bold mb-2">Company</h5>
        <p><a class="link link-hover link-primary" href="https://twitter.com">Twitter</a></p>
        <p><a class="link link-hover link-primary" href="mailto:team@mobilegreaser.com">team@mobilegreaser.com</a></p>
      </section>
      <section class="p-2 d-flex flex-column justify-content-lg-between">
        <h5 class="font-bold mb-2">Legal</h5>
        <p><a class="link link-hover link-primary" href="https://google.com">Terms of Service</a></p>
        <p><a class="link link-hover link-primary" href="https://google.com">Privacy Policy</a></p>
      </section>
    </footer>
  </div>
</div>
