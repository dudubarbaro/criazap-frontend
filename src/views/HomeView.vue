<script>
import Sidebar from "@/components/Sidebar.vue";
import chats from "@/components/chats.vue"
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
      await axios.post(
        "http://localhost:8000/chats/",
        this.comentario
      );
      await this.getAllComments();
    },
    async getAllComments() {
      const comentarios = await axios.get(
        "http://localhost:8000/chats/"
      );
      this.comentarios = comentarios.data;
    },
  },
  async created() {
    await this.getAllComments();
  },
  
};
</script>
<template>
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
        :comentarios="comentario"
      />
      <div class="send-mensage">

        <div class="submit">
          <input
            @keydown.enter="addComment()"
            type="text"
            style="padding: 4px"
            placeholder="escreva seu comentario
              "
            v-model="comentario.texto"
          />
          <button
            v-on:click.prevent="addComment"
            type="submit"
            class="btn btn-primary"
          >
            Enviar
          </button>
        <i class="fa-solid fa-paperclip"></i>
        </div>
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
