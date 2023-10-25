<script lang="ts">
	import type {PageData} from "./$types";
	import type User from "$lib/models/user";

	export let data: PageData;

	let user: User | undefined = data?.user;

</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">GreaserAdmin</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#if user}
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/admin/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/admin/users">accounts</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/admin/roles">roles</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/admin/logout">logout</a>
					</li>
				{:else}
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/admin/login">login</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>

<slot />

<style>
</style>
