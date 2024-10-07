<script lang="ts">
  import { Grid, type GridColumn } from "@mediakular/gridcraft";
  import { page } from '$app/stores';
  import type { Application, ApplicationListItem } from "$lib/models/application";

  import ViewApplicationCell from './components/ViewApplicationCell.svelte'

  export let data;

  $: error = $page.data?.error ?? null;
  $: applications = $page.data?.applications;

  let columns: GridColumn<Application>[] = [
    {
      key: 'actions',
      title: 'Actions',
      accessor: (row: ApplicationListItem) => ({
        value: row.id,
      }),
      renderComponent: ViewApplicationCell,
    }, {
      key: 'id',
      title: 'ID',
    },{
      key: 'status',
      title: 'Status'
    }, {
      key: 'is_backgroundcheck_concented',
      title: 'Background Check',
      accessor: (row: ApplicationListItem) => (row.is_backgroundcheck_concented ? 'true' : 'false'),
    }, {
      key: 'is_terms_and_conditions_accepted',
      title: 'Terms & Conditions',
      accessor: (row: ApplicationListItem) => (row.is_terms_and_conditions_accepted ? 'true' : 'false'),
    }
  ]

</script>

<div class="container mx-auto p-4 border- bg-white">
  <Grid data={ applications } {columns}/>
  {#if error}
    <div class="alert alert-error">{error}</div>
  {/if}

</div>