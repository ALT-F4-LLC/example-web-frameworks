<template>
  <div class="bg-black grid grid-cols-7 p-2">
    <h1 class="col-start-7 text-xl text-white text-center">Hello {{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserStore } from "../stores/user";

export default defineComponent({
  components: {},
  computed: { name: () => UserStore.state.name },
  name: "Toolbar",
});
</script>
