    <script>
    import Sidebar from "@/components/Sidebar.vue";
    import { mapState } from "pinia";
    import { useAuthStore } from "@/stores/auth";
    export default {
      components: { Sidebar },
      user: {},
          superuser: "",
    computed: {
        ...mapState(useAuthStore, ["id", "is_superuser", "username"]),
      },
    };
    </script>
<template>
  <section class="home-section">
    <div class="all">
      <Sidebar />
      <main class="config-page">
        <h1>Tela de configuração de Usuário</h1>
        <p>This is the config page</p>
        <div class="profile_content" v-bind="superuser">
              <div class="name" > Bem vindo ao seu perfil {{ username }} !</div>
              <div class="designation" v-if="is_superuser == true">Você está logado como Admin </div>
              <div class="designation" v-if="is_superuser != true">Você está logado como Usuario</div>
            </div>
      <div class="alter">
        <h1>Oque voce deseja alterar?</h1>
        <input type="text" placeholder="Nome de usuario">
        <input type="text" placeholder="Email de usuario">
      </div>
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
.config-page {
  width: 100vw;
}

input {
  display: flex;
  margin-top: 10px;
}
</style>
