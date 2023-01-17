<script>
import axios from "axios";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      user: {
        username: "",
      },
      superuser: "",
    };
  },
  async created() {
    const res = await axios.get(`http://localhost:8000/usuario/${this.id}/`);
    this.user = res.data;
    console.log(this.user);
  },
  computed: {
    ...mapState(useAuthStore, ["id", "username", "is_superuser"]),
  },
};
</script>

<template>
  <h1>status bar</h1>
</template>
