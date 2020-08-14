<script lang="ts">
  import { writable } from "svelte/store";
  import Dashboard from "./Dashboard.svelte";
  import Toolbar from "./Toolbar.svelte";

  const nameStore = writable("Jane");
</script>

<div class="grid h-screen" id="main">
  <Toolbar {nameStore} />
  <Dashboard {nameStore} />
</div>
