import { reactive } from "vue";

const state = reactive({
  name: "Jane",
});

export const UserStore = {
  setName(name: string) {
    state.name = name;
  },
  state,
};
