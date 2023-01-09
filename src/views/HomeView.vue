<script>
import Sidebar from "@/components/Sidebar.vue";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      value: 1,
      user: {},
      superuser: "",
    };
  },
  components: { Sidebar },
  computed: {
    ...mapState(useAuthStore, ["id", "is_superuser", "username"]),
  },
};
</script>
<template>
  <section class="home-section">
    <div class="all">
      <Sidebar />
      <main class="home-page">
        <div class="head">
          <i class="fa-solid fa-user"></i>
          <span> Bem-vindo {{ username }} !</span>
        </div>
        <div class="home-space">
          <a href="/login">Login</a>
          <span>Cadastre-se</span>
        </div>
        <div class="send-home-space">
          <div class="submit"></div>
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

.home-page {
  width: 100vw;
}
.head {
  align-items: center;
  flex-direction: row;
  display: flex;
  height: 13vh;
  background: linear-gradient(
    45deg,
    #fffccc,
    #ffffcc,
    #eecfc4,
    #d3c6cc,
    #e2c3c6
  );
}
.head span {
  margin-left: 1vw;
  font-family: "Poppins", sans-serif;
  font-size: 15pt;
  font-weight: 600;
}
.head i {
  margin-left: 5vw;
  font-size: 20pt;
}
.home-space {
  height: 77vh;
}
.send-home-space {
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 10vh;
  background: linear-gradient(
    45deg,
    #f0d1d4,
    #e2c3c6,
    #eecfc4,
    #fffccc,
    #ffffcc
  );
}
.input-home-space {
  height: 50%;
  width: 70%;
  margin-left: 2vw;
  border: #3a3737 1px solid;
  border-radius: 15px;
}
input::placeholder {
  padding: 1.5vw;
}
.send-home-space i {
  font-size: 20pt;
  margin-left: 5vw;
}

</style>
