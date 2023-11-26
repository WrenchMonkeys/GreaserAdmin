<script lang="ts">
  import { page } from '$app/stores'
  import { goto } from "$app/navigation";

  let errorMessage = '';
  let otpCode = '';
  let disabled: boolean = true;
  export let data;
  const phoneNumber = $page.url.searchParams.get('phoneNumber');

  const handleSubmitOTP = async () => {
    const submitOTPResponse = await fetch('/api/submitOTP', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber,
        code: otpCode
      }),
    });

    if (submitOTPResponse.ok) {
      await goto('/admin')
    } else {
      const data = await submitOTPResponse.json();
      errorMessage = data?.message;
    }
  };

  $: disabled = otpCode?.length !== 6;
</script>

<div class="container-xl flex flex-col min-h-screen p-2 justify-center items-center">

  <div class="card w-3/4 max-w-xl bg-base-100 shadow-xl">
    <div class="card-body">
      <header class="mb-3">
        <h4 class="card-title text-center mb-2">Submit OTP Code</h4>
        <p class="text-secondary ">An code has been sent to {phoneNumber} submit it below.</p>
      </header>
      <input class="input input-bordered w-full max-w-xs mx-auto" type="text" bind:value={otpCode} placeholder="input your OTP code here" maxlength="6">
      <div class="p-2 mb-2">
        {#if errorMessage}
          <p class="error-msg">{errorMessage}</p>
        {/if}
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={handleSubmitOTP} {disabled}>Sign in</button>
      </div>
    </div>
  </div>
</div>



<style lang="scss">
  .error-msg {
    color: red;
  }
</style>