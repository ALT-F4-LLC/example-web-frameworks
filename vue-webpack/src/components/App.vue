<template>
  <div class="grid h-screen" id="main">
    <Toolbar />
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "./Dashboard.vue";
import Toolbar from "./Toolbar.vue";

export default defineComponent({
  components: { Dashboard, Toolbar },
  name: "App",
});
</script>
