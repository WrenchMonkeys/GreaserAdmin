<script lang="ts">
  // const handleDeleteAccount = async () => {
  //   window.location = 'https://mobilegreaser.com/profile'
  // }

  import AuthModal from '$lib/components/authModal.svelte';
  import { fade } from 'svelte/transition';

  let showAuthModal = false;
  let accountDeleted = false;

  function openAuthModal() {
    showAuthModal = !showAuthModal;
  }

  function handleAccountDeleted() {
    showAuthModal = false;
    accountDeleted = true;
    setTimeout(() => {
      accountDeleted = false;
    }, 3000);
  }
</script>

<div class="container mx-auto p-4 flex-grow">
  <header class="mb-4 text-center">
    <h1 class="text-4xl font-bold">Delete Your Account</h1>
  </header>

  <section class="mb-4">
    <h2 class="text-2xl font-semibold">Steps to Request Account Deletion</h2>
    <ol class="list-decimal list-inside">
      <li>Click the "Request Account Deletion" button below from your phone, you will be redirected to the MobileGreaser mobile app.</li>
      <li>Navigate to the profile page on the MobileGreaser mobile app</li>
      <li>Scroll to the bottom of the view and Click "Delete Account"</li>
      <li>Confirm your request in the confirmation dialog.</li>
      <li>Your account will be marked for deletion and you will be logged out.</li>
      <li>Your data will be retained for 30 days before permanent deletion.</li>
    </ol>
  </section>

  <section class="mb-4">
    <h2 class="text-2xl font-semibold">Data Deletion and Retention</h2>
    <p>Upon requesting account deletion, the following data will be deleted:</p>
    <ul class="list-disc list-inside">
      <li>Personal information (name, email, phone number)</li>
      <li>Account settings and preferences</li>
      <li>Usage data and activity logs</li>
    </ul>
    <p>The following data will be retained for 30 days:</p>
    <ul class="list-disc list-inside">
      <li>Transaction history</li>
      <li>Support tickets and communication logs</li>
    </ul>
    <p>After 30 days, all retained data will be permanently deleted.</p>
  </section>

  <button
    on:click={openAuthModal}
    class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  >
    Delete my account
  </button>

  {#if showAuthModal}
    <AuthModal on:accountDeleted={handleAccountDeleted} on:closeModal={openAuthModal} />
  {/if}

  {#if accountDeleted}
    <div
      class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg"
      transition:fade
    >
      Account successfully deleted!
    </div>
  {/if}

</div>

<style>
    .container {
        max-width: 800px;
    }
    .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    .btn-danger {
        background-color: #e3342f;
        color: white;
    }
    .btn-danger:hover {
        background-color: #cc1f1a;
    }
</style>