<script lang="ts">
  import { page } from '$app/stores'

  let errorMessage = '';
  let otpCode = '';
  let disabled: boolean = true;
  const phoneNumber = $page.url.searchParams.get('phoneNumber');

  const handleSubmitOTP = async () => {
    const submitOTPResponse = await fetch('/api/submitOTP', {
      method: 'POST',
      body: JSON.stringify({
        phoneNumber,
        code: otpCode
      }),
    });
    const responseData = await submitOTPResponse.json()

    if (!submitOTPResponse.ok) {
      errorMessage = responseData.message;
    }
  }

  $: disabled = otpCode?.length !== 6;
</script>

<div class="container d-flex flex-row min-vh-100 p-2 align-items-center">
    <div class="mx-auto h-100 d-flex flex-column justify-content-center align-items-center">
      <header class="mb-1">
        <h4 class="p-3 mb-0 text-center">Submit OTP Code</h4>
        <p class="text-secondary text-center">An code has been sent to {phoneNumber} submit it below.</p>
      </header>

      <form on:submit|preventDefault={handleSubmitOTP} method="POST" class="w-100 p-3">
        <input class="form-control" type="text" bind:value={otpCode} placeholder="input your OTP code here" maxlength="6">
        <div class="p-2 mb-3">
          {#if errorMessage}
            <p class="error-msg">{errorMessage}</p>
          {/if}
        </div>
        <div class="d-grid gap-2 p-2 mb-3">
          <button class="btn btn-primary btn-lg" type="submit" {disabled}>Sign in</button>
        </div>
      </form>
    </div>
</div>

<style lang="scss">
  .error-msg {
    color: red;
  }
</style>