<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import PhoneNumberInput from "$lib/components/PhoneNumberInput.svelte";
  import { derived } from "svelte/store";
  import { page} from "$app/stores";
  import { createClient, SupabaseClient, type User } from "@supabase/supabase-js";
  import { building } from "$app/environment";
  import { env } from "$env/dynamic/public";

  const dispatch = createEventDispatcher();

  let countryCode = '';
  let phone = '';
  let otpCode = '';
  let jwtToken = '';
  let isAuthenticated = false;
  let isPhoneNumberSubmitted = false;
  let isOTPSubmitted = false;

  let showDeleteConfirmation = false;
  let isLoading = false;
  let supabase: SupabaseClient;
  let account: User;


  async function login() {
    console.log("Logging in")
    console.log("phone", phone.replaceAll(/\D/g, ''))
    if (phone.replaceAll(/\D/g, '').length < 10) {
      console.log("Phone number is too short")
      return;
    }

    const { data, error } = await supabase.auth.signInWithOtp({
      phone: `+${countryCode}${phone.replace(/\D+/g, '')}`
    })

    if (error) {
      console.log("Error logging in", error)
      return;
    }

    isPhoneNumberSubmitted = true
  }

  async function submitOTP() {
    console.log("Submitting OTP")
    if (!isPhoneNumberSubmitted) {
      console.log("Phone number not submitted")
      return;
    }

    if (otpCode.length < 6) {
      console.log("OTP code is too short")
      return;
    }

    const { data, error: otpError } = await supabase.auth.verifyOtp({ phone: `+${countryCode}${phone.replace(/\D+/g, '')}`, token: otpCode.toString(), type: 'sms' });

    if (otpError) {
      console.log("Error submitting OTP", otpError)
      return;
    }

    if (data.user === null || data.session?.access_token == null) {
      console.log("Error submitting OTP", otpError)
      return;
    }

    account = data.user
    jwtToken = data.session.access_token
    console.log("Account", account)
    isAuthenticated = true;
    isOTPSubmitted = true;

  }
  function cancelDeleteAccount() {
    dispatch("closeModal");
  }

  async function confirmDeleteAccount() {
    const accountDeleteRes = await fetch(new URL('/api/authn/delete', env.PUBLIC_API_GATEWAY_URL), {
      headers: new Headers({
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json'
      })
    });


    if (!accountDeleteRes.ok) {
      console.log("Error deleting account", accountDeleteRes)
      return;
    }

    dispatch('accountDeleted');

  }


  if (!building) {
    supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_KEY);
  }
</script>


<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6" transition:fade>
    {#if !isAuthenticated && !isPhoneNumberSubmitted}
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <PhoneNumberInput id="phone" bind:countryCode={countryCode} bind:phoneNumber={phone} />
        <button
          on:click|preventDefault={login}
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </div>
    {:else if isPhoneNumberSubmitted && !isAuthenticated}
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Submit OTPs</h2>
        <p class="mb-4">an OTP code was sent to your phone {`+${countryCode}${phone.replace(/\D+/g, '')}`} submit below</p>
        <div class="space-y-4">
          <label for="otp" class="block text-sm font-medium text-gray-700">OTP Code</label>
          <input id="otp" type="text" bind:value={otpCode} class='input-bordered input' maxlength="6" minlength="0" pattern="\d{6}" />
          <button
            on:click={submitOTP}
            class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
          >
            Submit OTP Code
          </button>
<!--          <button-->
<!--            on:click={logout}-->
<!--            class="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"-->
<!--          >-->
<!--            Logout-->
<!--          </button>-->
        </div>
      </div>
    {:else if isPhoneNumberSubmitted && isAuthenticated}
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Confirm Account Deletion</h2>
        <p class="mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
        <div class="space-y-4">
          <button
            on:click={confirmDeleteAccount}
            class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Yes, Delete My Account
          </button>
          <button
            on:click={cancelDeleteAccount}
            class="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        </div>
      </div>
    {:else}

    {/if}
  </div>
</div>

