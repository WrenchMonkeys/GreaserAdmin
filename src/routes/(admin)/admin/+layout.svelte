<script lang="ts">
	import type {PageData} from "./$types";
	import type User from "$lib/models/user";

	export let data: PageData;

	$: user = data?.user;

</script>
<div class="navbar bg-base-100 p-2">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		</button>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">GreaserAdmin</a>
	</div>
	<div class="navbar-start">
		{#if user}
			<a class="link link-hover p-2" aria-current="page" href="/admin">Home</a>
		{:else}
			<a class="link link-hover p-2" aria-current="page" href="/">Home</a>
		{/if}
	</div>
	<div class="navbar-center">
		{#if user}
			<a class="link link-hover p-2" aria-current="page" href="/admin/users">Users</a>
			<a class="link link-hover p-2" aria-current="page" href="/admin/roles">Roles</a>
			<a class="link link-hover p-2" aria-current="page" href="/admin/work-orders">Work Orders</a>
			<a class="link link-hover p-2" aria-current="page" href="/admin/vehicles">Vehicles</a>
			<a class="link link-hover p-2" aria-current="page" href="/admin/services">Services</a>
		{/if}
	</div>
	<div class="navbar-end">
		{#if user}
			<a class="link link-hover " aria-current="page" href="/admin/logout">logout</a>
		{:else}
			<a class="link link-hover" aria-current="page" href="/admin/login">login</a>
		{/if}
	</div>
</div>


<slot />

<style>
</style>
