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
  <section class="home-section">
    <div class="all">
      <Sidebar />
      <main class="perfil-page">
        <h1>Bem-vindo ao seu perfil {{ username }} !</h1>
        <p>This is the perfil page</p>
      </main>
    </div>
  </section>
</template>
<style scoped>
.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}

.home-section {
  position: relative;
  background-color: var(--color-body);
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}

.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}
.all {
  display: flex;
}

.perfil-page {
  width: 100vw;
}
</style>
