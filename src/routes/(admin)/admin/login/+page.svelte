<script lang="ts">
  import { error } from "@sveltejs/kit";
  import type { EventHandler } from "svelte/elements";
  import PhoneNumberInput from "$lib/components/PhoneNumberInput.svelte";

  let countryCode = '1'
  let phoneNumber = '';
  let errorMessage = '';
  let rememberMe = false;
  let disabled = true;

  const handleLogin = () => {

    if (!phoneNumber?.includes('@mobilegreaser.com') && phoneNumber !== '') {
      errorMessage = 'Invalid phone number provided.';
    }

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber,
        rememberMe,
      }),
      headers: {
        'Accept': 'application/json'
      }
    })
  }


  const validatePhoneNumberField: EventHandler = (e: Event) => {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
      const email = target.value;

      if (email !== '' && !email?.includes('@mobilegreaser.com')) {
        errorMessage = 'Invalid email provided.';
      } else {
        errorMessage = '';
        disabled = false;
      }

    } else {
      throw Error("Unknown input event");
    }
  }

  $:
</script>

<div class="container d-flex flex-row min-vh-100 p-2">
  <div class="left w-50 d-flex justify-content-center align-items-center">
    <dotlottie-player src="https://lottie.host/33109283-ad5b-4ab3-be2e-b34a96bb4af4/kCq2ptSqX7.json" background="transparent" speed="1" style="width: 50%; height: auto;" loop autoplay/>
  </div>
  <div class="right w-50">
    <div class="w-75 mx-auto h-100 d-flex flex-column justify-content-center align-items-center">
      <header class="mb-1">
        <h4 class="p-3 mb-0 text-center">Sign in</h4>
        <p class="text-secondary text-center">Enter your phone number to sign in</p>
      </header>

      <form action="" class="w-100 p-3">
        <div class="p-2 mb-3">
          <PhoneNumberInput bind:countryCode bind:phoneNumber/>
          {#if errorMessage}
            <p class="error-msg">{errorMessage}</p>
          {/if}
        </div>
        <div class="p-2 mb-3">
          <input class="form-check-input" type="checkbox" id="rememberMe" name="rememberMe" bind:checked={rememberMe}>
          <label for="rememberMe" class="form-label">Remember me</label>
        </div>
        <div class="d-grid gap-2 p-2 mb-3">
          <button class="btn btn-primary btn-lg" type="button" on:click={handleLogin} {disabled}>Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style lang="scss">
  .error-msg {
    color: red;
  }

  h4 {
    font-family: 'Bricolage Grotesque', sans-serif;
  }

  @media only screen and (max-width: 1000px) {
    .left {
      display: none !important;
    }

    .right {
      width: 100% !important;
    }
  }
</style>
