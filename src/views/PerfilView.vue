<script>
import Sidebar from "@/components/Sidebar.vue";
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
  components: { Sidebar },
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
  <div class="all">
    <Sidebar />
    <main class="perfil-page">
      <h1>Bem-vindo ao seu perfil {{ username }} !</h1>
      <p>This is the perfil page</p>
    </main>
  </div>
</template>
<style scoped>
.all {
  display: flex;
}

.perfil-page {
  width: 100vw;
}
</style>
