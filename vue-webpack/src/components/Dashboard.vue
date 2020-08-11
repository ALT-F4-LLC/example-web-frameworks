<template>
  <div class="flex items-center justify-center text-blue-200">
    <div class="grid">
      <h1 class="text-lg pb-2">Welcome to the dashboard {{ name }}!</h1>
      <button @click="setName('Chat')">Change Name</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserStore } from "../stores/user";

const { setName } = UserStore;

export default defineComponent({
  components: {},
  computed: { name: () => UserStore.state.name },
  methods: { setName },
  name: "Dashboard",
});
</script>
