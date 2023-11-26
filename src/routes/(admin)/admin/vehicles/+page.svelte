<script lang="ts">
	import { timeout } from 'd3';
	import { browser } from '$app/environment';

	export let data;

	let error = '';

	let year: string | null = null;
	let make: string | null = null;
	let model: string | null = null;
	let trim: string | null = null;
	let page: number = 1;
	let size: number = 10;

	let makes: Array<{ name: string }> = [];
	let models: Array<{ name: string }> = [];
	let trims: Array<{ title: string; engine: string; transmission: string; drivetrain: string }> = [];

	$: vehicles = data.streamed?.vehicles ?? [];

	$: if (browser) {
		getVehicles(page, size, year, make, model, trim);
	}

	$: if (year) {
		getMakes(year);
	}

	$: if (year && make) {
		getModels(year, make);
	}

	const getVehicles = async (
		pg: number,
		size: number,
		year: string | null,
		make: string | null,
		model: string | null,
		trim: string | null
	) => {
		const vehiclesResp = await fetch(
			`/api/vehicle?year=${year ?? ''}&make=${make ?? ''}&model=${model ?? ''}&trim=${
				trim ?? ''
			}&page=${pg}&size=${size}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		if (!vehiclesResp.ok) {
			error = vehiclesResp.statusText;
			timeout(() => (error = ''), 5000);
		}

		data.streamed.vehicles = vehiclesResp.json();
	};

	const getMakes = async (year: string | null) => {
		const makesResp = await fetch(`/api/vehicle/${year}/make/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!makesResp.ok) {
			error = makesResp.statusText;
			timeout(() => (error = ''), 5000);
		}

		make = null;
		makes = await makesResp.json();
	};

	const getModels = async (year: string, make: string) => {
		const modelsResp = await fetch(`/api/vehicle/${year}/make/${make}/model`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!modelsResp.ok) {
			error = modelsResp.statusText;
			timeout(() => (error = ''), 5000);
		}

		model = null;
		models = await modelsResp.json();
	};
</script>

<main class="container mx-auto mt-4">
	{#if error}
		<div class="alert alert-error">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>{error}</span>
		</div>
	{/if}
	<div class="card card-normal p-2">
		<header class="card-header mb-3">
			<h1 class="card-title text-4xl font-bold tracking-tight">Vehicles</h1>
		</header>
		<div>
			<select class="select select-bordered w-full max-w-xs" bind:value={year}>
				{#await data.streamed?.years}
					<option disabled selected value="">...loading</option>
				{:then years}
					<option disabled selected value="">Select Year</option>
					{#each years as year}
						<option value={year.value}>{year.value}</option>
					{/each}
				{/await}
			</select>
			<select
				class="select select-bordered w-full max-w-xs"
				bind:value={make}
				disabled={year == null}
			>
				<option disabled selected>Select Make</option>
				{#if makes}
					{#each makes as make}
						<option value={make.name}>{make.name}</option>
					{/each}
				{/if}
			</select>
			<select
				class="select select-bordered w-full max-w-xs"
				bind:value={model}
				disabled={make == null}
			>
				<option disabled selected>Select Model</option>
				{#if models}
					{#each models as model}
						<option value={model.name}>{model.name}</option>
					{/each}
				{/if}
			</select>
			<!--      <select class="select select-bordered w-full max-w-xs" bind:value={trim}>-->
			<!--        {#await data._?.trim}-->
			<!--          <option disabled selected>...loading</option>-->
			<!--        {:then years}-->
			<!--          <option disabled selected>Select Year</option>-->
			<!--          {#each years as year}-->
			<!--            <option value={year.value}>{year.value}</option>-->
			<!--          {/each}-->
			<!--        {/await}-->
			<!--      </select>-->
		</div>
		<div class="divider" />

		{#await vehicles}
			<p>...loading</p>
		{:then value}
			<table class="table table-zebra table-auto">
				<thead>
					<tr>
						<th>ID</th>
						<th>Year</th>
						<th>Make</th>
						<th>Model</th>
						<th>Trim</th>
						<th>Engine</th>
						<th>Transmission</th>
						<th>Drivetrain</th>
					</tr>
				</thead>
				<tbody>
					{#each value as vehicle}
						<tr>
							<th>{vehicle.id}</th>
							<td>{vehicle.year}</td>
							<td>{vehicle.make}</td>
							<td>{vehicle.model}</td>
							<td>{vehicle.trim}</td>
							<td>{vehicle.engine}</td>
							<td>{vehicle.transmission}</td>
							<td>{vehicle.drivetrain}</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div class="join p-2 flex justify-center">
				<button
					class="join-item btn"
					disabled={page === 1}
					on:click={() => (page = page > 1 ? page - 1 : page)}>«</button
				>
				<button class="join-item btn">Page {page}</button>
				<button
					class="join-item btn"
					disabled={value.length < size}
					on:click={() => (page = size <= value.length ? page + 1 : page)}
					>»</button>
			</div>
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
</main>
