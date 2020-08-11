<script lang="ts">
  import type { Writable } from "svelte/store";

  export let nameStore: Writable<string>;

  function setName(name: string) {
    $nameStore = name;
  }

  $: p = new Promise((resolve) => setTimeout(() => resolve($nameStore), 1000));
</script>

<div class="flex items-center justify-center text-blue-200">
  <div class="grid">
    <h1 class="text-lg pb-2">Welcome to the dashboard {$nameStore}!</h1>

    {#await p}
      <p>...waiting</p>
    {:then value}
      <p>The value is {value}</p>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}

    <button on:click={() => setName('Chat')}>Change Name</button>
  </div>
</div>
