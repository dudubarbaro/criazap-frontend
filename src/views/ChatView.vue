<script>
import Sidebar from "@/components/Sidebar.vue";
import chats from "@/components/chats.vue";
import axios from "axios";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      value: 1,
      user: {},
      superuser: "",
      comentarios: [],
      comentario: {
        texto: "",
        autor: 0,
      },
    };
  },
  components: { Sidebar, chats },
  computed: {
    ...mapState(useAuthStore, ["id", "is_superuser", "username"]),
  },
  methods: {
    async addComment() {
      if (this.comentario.texto.trim() === "") {
        return;
      }
      this.comentario.autor = this.id;
      await axios.post("http://localhost:8000/chats/", this.comentario);
      await this.getAllComments();
    },
    async getAllComments() {
      const comentarios = await axios.get("http://localhost:8000/chats/");
      this.comentarios = comentarios.data;
    },
  },
  async created() {
    await this.getAllComments();
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
          <span>{{ username }}</span>
        </div>
        <div class="mensages"></div>
        <chats
          v-for="comentario in comentarios"
          :key="comentario.id"
          :comentarios="comentario" />
        <div class="send-mensage">
          <i class="fa-solid fa-paperclip"></i>
          <div class="submit">
            <input
              @keydown.enter="addComment()"
              type="text"
              style="padding: 4px"
              placeholder="escreva seu comentario
          "
              v-model="comentario.texto" />
            <button
              v-on:click.prevent="addComment"
              type="submit"
              class="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style scoped>
.mensages {
  overflow: auto;
}

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

.submit input {
  border-radius: 8px 0 0 8px;
  outline: none;
  font-family: "Poppins";
  margin-left: 15px;
  height: 40px;
  width: 55rem;
}

button {
  cursor: pointer;
  color: #3a3737;
  font-family: "Poppins";
  font-weight: 700;
  border-radius: 0 8px 8px 0;
  width: 100px;
  height: 40px;
  background: linear-gradient(
    to left,
    #e999a1,
    #ecb2b7,
    #f7c4b2,
    #f1eb96,
    #caca9e
  );
}

button:hover {
  background: linear-gradient(
    to right,
    #e999a1,
    #ecb2b7,
    #f7c4b2,
    #f1eb96,
    #caca9e
  );
}

.send-mensage i {
  font-size: 20pt;
  margin-left: 5vw;
}
</style>
