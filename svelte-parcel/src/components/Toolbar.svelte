<script lang="ts">
  import type { Writable } from "svelte/store";

  export let nameStore: Writable<string>;

  $: name = $nameStore.toUpperCase();
</script>

<div class="bg-black grid grid-cols-7 p-2">
  <h1 class="col-start-7 text-xl text-white text-center">Hello {name}</h1>
</div>
