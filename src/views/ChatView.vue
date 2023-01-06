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
    <main class="home-page">
      <div class="head">
        <i class="fa-solid fa-user"></i>
        <span>{{ user.username }}</span>
      </div>
      <div class="mensages"></div>
      <div class="send-mensage">
        <i class="fa-solid fa-paperclip"></i>
        <input class="input-mensage" type="text" placeholder="Mensagem" />
      </div>
    </main>
  </div>
</template>
<style scoped>
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
.mensages {
  height: 77vh;
}
.send-mensage {
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
.input-mensage {
  height: 50%;
  width: 70%;
  margin-left: 2vw;
  border: #3a3737 1px solid;
  border-radius: 15px;
}
input::placeholder {
  padding: 1.5vw;
}
.send-mensage i {
  font-size: 20pt;
  margin-left: 5vw;
}
</style>
