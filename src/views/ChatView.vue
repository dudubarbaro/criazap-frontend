<script>
import chats from "@/components/chats.vue";
import axios from "axios";
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import dayjs from "dayjs";
import locale_pt_br from "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
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
  components: { chats },
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
      this.comentarios = comentarios.data;
      this.comentarios.forEach(
        (comentario) =>
          (comentario.data = dayjs(comentario.data)
            .locale(locale_pt_br)
            .fromNow())
      );
    },
  },
  async created() {
    await this.getAllComments();
  },
};
</script>
<template>
  <section class="flex h-screen overflow-auto">
    <div class="bg-white xl:w-11/12 lg:w-8/12 hidden lg:block">
      <div class="py-6 px-20 border-b">
        <!-- <div class="flex">
          <div class="flex flex-grow">
            <div class="relative mr-4"></div>
            <div>
              <p class="font-medium">Chat Principal</p>
              <small class="text-gray-500">Ativo</small>
            </div>
          </div>
        </div> -->
      </div>
      <div class="py-6 px-20 h-3/4 overflow-auto">
        <div class="absolute">
          <div class="w-4/5">
            <input
              type="text"
              class="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full"
              placeholder="Escreva sua mensagem..."
              v-model="comentario.texto"
            />
          </div>

          <a
            @click="addComment()"
            class="bg-indigo-900 text-white rounded px-4 py-2"
            >Enviar</a
          >
        </div>
        <chats
          v-for="comentario in comentarios"
          :key="comentario.id"
          :comentarios="comentario"
        />
        <div class="flex mb-12">
          <div class="flex flex-col"></div>
        </div>
        <div class="flex flex-row-reverse mb-12">
          <div class="flex flex-col"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
