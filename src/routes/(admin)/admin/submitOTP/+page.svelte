<script lang="ts">
  import { loginStore } from "$lib/stores/loginStore";
  import { goto } from "$app/navigation";

  $: errorMessage = '';
  let otpCode = '';
  let disabled: boolean = true;
  const phone =  $loginStore.phoneNumber as string;
  $: disabled = otpCode?.length !== 6;


  if (phone == null) {
    goto('/admin/login');
  }
</script>

<form method="post">
  <input type="text" hidden="hidden" name="phone" value={phone}>
<div class="container-xl flex flex-col min-h-screen p-2 justify-center items-center">
  <div class="card w-3/4 max-w-xl bg-base-100 shadow-xl">
    <div class="card-body">
      <header class="mb-3">
        <h4 class="card-title text-center mb-2">Submit OTP Code</h4>
        <p class="text-secondary ">An OTP code has been sent to <span class="font-bold text-black">{$loginStore.phoneNumber}</span> submit it below.</p>
      </header>
      <input class="input input-bordered w-full max-w-xs mx-auto" type="text" name='otpCode' bind:value={otpCode} placeholder="input your OTP code here" maxlength="6">
      <div class="p-2 mb-2">
        {#if errorMessage}
          <p class="error-msg">{errorMessage}</p>
        {/if}
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" type="submit" {disabled}>Sign in</button>
      </div>
    </div>
  </div>
</div>
</form>



<style lang="scss">
  .error-msg {
    color: red;
  }
</style>