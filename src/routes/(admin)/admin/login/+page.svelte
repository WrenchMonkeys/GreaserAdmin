<script lang="ts">
  import { loginStore } from "$lib/stores/loginStore";
  import PhoneNumberInput from "$lib/components/PhoneNumberInput.svelte";
  import { goto } from "$app/navigation";

  let countryCode = '1'
  let phoneNumber = '';
  let errorMessage = '';
  let rememberMe = false;
  let disabled = true;

  const handleLogin = async () => {
    const submitPhoneNumberResponse = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber: `+${countryCode}${phoneNumber.replace(/\D+/g, '')}`,
        rememberMe,
      }),
      headers: {
        'Accept': 'application/json'
      }
    })

    if (submitPhoneNumberResponse.ok) {
      $loginStore.phoneNumber = `+${countryCode}${phoneNumber.replace(/\D+/g, '')}`;
      await goto('/admin/submitOTP');
    } else {
      errorMessage = submitPhoneNumberResponse.statusText;
    }
  }

  $: disabled = phoneNumber?.length !== 14 && errorMessage === '';

</script>

<div class="container-xl flex flex-row min-h-screen p-2">
  <div class="left w-1/2 flex justify-center items-center">
    <dotlottie-player src="https://lottie.host/33109283-ad5b-4ab3-be2e-b34a96bb4af4/kCq2ptSqX7.json" background="transparent" speed="1" style="width: 50%; height: auto;" loop autoplay/>
  </div>
  <div class="right w-1/2">
    <div class="w-3/4 mx-auto h-full flex flex-col justify-center align-center">
      <header class="mb-1">
        <h4 class="p-3 mb-0 text-center">Enter your phone number</h4>
        <p class="text-secondary text-center">We'll send you a code to verify</p>
      </header>

      <form action="" class="w-3/4 mx-auto p-3">
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
        <div class="grid gap-2 p-2 mb-3">
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
