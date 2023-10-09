<script>
  import googleBadge from '$lib/assets/google-play-badge.png';
  import appleBadge from '$lib/assets/apple-badge.svg'

</script>

<div class="container mt-4">
  <div class="d-flex flex-row">
    <header class="p-3 d-flex flex-column w-50">
      <h1 class="font-weight-bold mb-4 text-center">On Demand Mobile Mechanics</h1>
      <p class="text-secondary text-center">Mobile Greaser helps you service your vehicle any time, any location, at your convenience.</p>
      <div class="d-flex flex-row justify-content-center align-items-center">
        <a href="https://play.google.com/store/apps?gl=us" class="w-25 mw-200"><img class="mx-auto img-fluid w-100" src={appleBadge} alt="apple marketplace badge"></a>
        <a href="https://play.google.com/store/apps?gl=us" class="w-25 mw-200"><img class="mx-auto img-fluid w-100" src={googleBadge} alt="google marketplace badge"></a>
      </div>
    </header>
    <div class="p-3 d-flex align-middle d-flex align-items-center w-50">
      <img class="mx-auto img-fluid" src="https://via.placeholder.com/300" alt="image placeholder"/>
    </div>
  </div>

  <div class="divider"></div>

  <div class="d-flex flex-column">
    <div class="p-3 d-flex flex-column justify-content-center align-items-center">
      <h2>Save time at the shop</h2>
      <p>Join our clients to save time and money on your vehicle maintenance</p>
    </div>
    <div class="p-3 d-flex">
      <img class="mx-auto img-fluid w-100 h-auto" src="https://via.placeholder.com/1200x300"/>
    </div>
  </div>
  <div class="divider"></div>
  <div class="d-flex flex-row-reverse">
    <div class="p-3 d-flex flex-column justify-content-center w-50">
      <h2>Get a complete service report</h2>
      <p>With every service request, we will include a free 50 point inspection report.</p>
    </div>
    <div class="p-3 d-flex align-middle d-flex align-items-center w-50">
      <img class="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
    </div>
  </div>
  <div class="divider"></div>
  <div class="d-flex flex-row">
    <div class="p-3 d-flex flex-column justify-content-center w-50">
      <h2>Drive with piece of mind</h2>
      <p>With our 5000 mile warranty on all services we offer, you never have to worry about improper installation or faulty parts again</p>
    </div>
    <div class="p-3 d-flex align-middle d-flex align-items-center w-50">
      <img  class="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
    </div>
  </div>
  <div class="divider"></div>
  <div class="d-flex flex-row-reverse">
    <div class="p-3 d-flex flex-column justify-content-center w-50">
      <h2>Simple and affordable Pricing</h2>
      <p>With our flat rate pricing you never have to worry about being up-sold at the shop again.</p>
      <div class="my-2 d-flex flex-row justify-content-center align-items-center">
        <a href="https://play.google.com/store/apps?gl=us" class="w-50 mw-200"><img class="mx-auto img-fluid w-100" src={appleBadge} alt="apple marketplace badge"></a>
        <a href="https://play.google.com/store/apps?gl=us" class="w-50 mw-200"><img class="mx-auto img-fluid w-100" src={googleBadge} alt="google marketplace badge"></a>
      </div>
    </div>
    <div class="p-3 d-flex align-middle d-flex align-items-center w-50">
      <img class="mx-auto img-fluid" src="https://via.placeholder.com/300"/>
    </div>
  </div>
  <div class="divider"></div>
  <footer class="py-3 d-flex flex-lg-row flex-column justify-content-lg-around">
    <section class="p-2 d-flex flex-column justify-content-lg-between">
      <h5 class="fw-bold">Mobile Greaser</h5>
      <p>Copyright © 2023 Mobile Greaser, Inc. All rights reserved</p>
    </section>
    <section class="p-2 d-flex flex-column justify-content-lg-between">
      <h5 class="fw-bold">Company</h5>
      <p><a class="text-secondary" href="https://twitter.com">Twitter</a></p>
      <p><a class="text-secondary" href="mailto:team@mobilegreaser.com">team@mobilegreaser.com</a></p>
    </section>
    <section class="p-2 d-flex flex-column justify-content-lg-between">
      <h5 class="fw-bold">Legal</h5>
      <p><a class="text-secondary" href="https://google.com">Terms of Service</a></p>
      <p><a class="text-secondary" href="https://google.com">Privacy Policy</a></p>
    </section>
  </footer>
</div>


<style lang="scss">
  .mw-200 {
    max-width: 200px;
  }

  h1, h2, h5 {
    font-family: 'Bricolage Grotesque', sans-serif;
  }

</style>