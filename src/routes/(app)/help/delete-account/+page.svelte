<script lang="ts">
  const handleDeleteAccount = async () => {
    window.location = 'https://mobilegreaser.com/profile'
  }
</script>

<div class="container mx-auto p-4 flex-grow">
  <header class="mb-4 text-center">
    <h1 class="text-4xl font-bold">Delete Your Account</h1>
  </header>

  <section class="mb-4">
    <h2 class="text-2xl font-semibold">Steps to Request Account Deletion</h2>
    <ol class="list-decimal list-inside">
      <li>Click the "Request Account Deletion" button below, you will be redirected to the MobileGreaser mobile app.</li>
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

  <button class="btn btn-danger mx-auto" on:click={handleDeleteAccount}>Request Account Deletion</button>
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