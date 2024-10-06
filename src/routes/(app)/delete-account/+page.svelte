<script lang="ts">
  import { goto } from '$app/navigation';
  import { createClient } from '@supabase/supabase-js';
  import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from '$env/static/public';

  const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

  let errorMessage = '';
  let successMessage = '';

  const handleDeleteAccount = async () => {
    const { error } = await supabase.auth.api.deleteUser(supabase.auth.user().id);

    if (error) {
      errorMessage = error.message;
    } else {
      successMessage = 'Your account deletion request has been submitted. Your data will be retained for 30 days before permanent deletion.';
      await goto('/');
    }
  }
</script>

<div class="container mx-auto p-4 flex-grow">
  <header class="mb-4">
    <h1 class="text-4xl font-bold">Delete Your Account</h1>
  </header>

  <section class="mb-4">
    <h2 class="text-2xl font-semibold">Steps to Request Account Deletion</h2>
    <ol class="list-decimal list-inside">
      <li>Click the "Request Account Deletion" button below.</li>
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

  {#if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {/if}

  {#if successMessage}
    <p class="text-green-500">{successMessage}</p>
  {/if}

  <button class="btn btn-danger" on:click={handleDeleteAccount}>Request Account Deletion</button>
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