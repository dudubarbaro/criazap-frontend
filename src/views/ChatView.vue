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
  <section class="overflow-y-auto w-100 overflow-hidden h-5/6">
    <div class="bg-white xl:w-11/12 lg:w-8/12 hidden lg:block">
      <div class="py-15 px-50"></div>
      <div class="py-50 px-50 overflow-hidden">
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
  <div class="flex py-10 px-20">
    <div class="w-5/6">
      <input
        type="text"
        v-model="comentario.texto"
        class="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full"
        placeholder="Escreva sua mensagem..."
      />
    </div>
    <div class="w-1/5 flex justify-end">
      <svg
        class="w-6 mr-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
        />
      </svg>
      <svg
        class="w-6 mr-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <a
        @click="addComment()"
        class="bg-emerald-900 text-white rounded px-4 py-2"
        >Enviar</a
      >
    </div>
  </div>
</template>
<style scoped>
a {
  cursor: pointer;
}
</style>
