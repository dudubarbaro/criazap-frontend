<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
export default {
  name: "empreendimentos",
  props: ["id", "empreendimento"],
  user: {},
  Empreendimentos: {
    Empreendimento: 0,
    tel_responsavel: "",
  },
  methods: {
    async getAllEmpreendimentos(id) {
      await this.get(`/Empreendimentos/${id}/`, this.empreendimentos);
      console.log(this.empreendimentos);
    },
  },
  async created() {
    const res = await axios.get(
      `http://localhost:8000/Empreendimentos/${this.id}/`
    );
    this.Empreendimento = res.data;
  },
  computed: {
    ...mapState(useAuthStore, ["empreendimentos", "username", "foto"]),
  },
};
</script>

<template>
  <!-- Card is full width. Use in 12 col grid for best view. -->
  <!-- Card code block start -->
  <div
    class="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded"
  >
    <div class="w-full lg:w-1/2">
      <div class="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
        <div
          class="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col"
        >
          <h4
            class="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4"
          >
            <p>{{ empreendimento.data }}</p>
          </h4>
          <h4
            class="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal"
          ></h4>
        </div>
        <h2
          class="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold"
        >
          {{ empreendimento.nome }}
        </h2>
        <p
          class="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12"
        >
          {{ empreendimento.descricao }}
        </p>
        <div class="flex lg:items-center items-start flex-col lg:flex-row">
          <div class="flex items-center">
            <div
              class="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6"
            ></div>
            <div
              class="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6"
            ></div>
            <div
              class="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6"
            ></div>
            <div
              class="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6"
            ></div>
            <div
              class="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6"
            ></div>
            <p
              class="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1"
            ></p>
          </div>
          <div class="flex items-start pl-3">
            <span class="mr-1 text-gray-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="11" r="3" />
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"
                />
              </svg>
            </span>
            <p
              class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal text-center"
            >
              {{ empreendimento.local }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex flex-row items-center justify-between border-t border-gray-300"
      >
        <div class="flex items-center">
          <div class="flex items-center space-x-2">
            <div
              class="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
            ></div>

            <button
              class="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded"
            >
              <a target="_blank" :href="empreendimento.tel_responsavel"
                >WhatsApp</a
              >
            </button>
            <button
              class="bg-transparent hover:bg-sky-500 text-sky-700 font-semibold hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded"
            >
              <RouterLink to="/chat">Chat</RouterLink>
            </button>
          </div>
          <div class="flex items-center ml-6"></div>
        </div>
        <div class="flex items-center">
          <div
            class="text-gray-600 dark:text-gray-400 hover:text-gray-700 cursor-pointer mr-4"
          >
            <svg
              class="feather feather-bookmark"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
              ></path>
            </svg>
          </div>
          <div
            class="text-indigo-700 dark:text-indigo-600 hover:text-indigo-600 cursor-pointer"
          >
            <svg
              class="feather feather-share-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block"
    >
      <img
        class="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
        :src="empreendimento.foto.file"
        alt="banner"
      />
    </div>
  </div>
  <!-- Card code block end -->
</template>
<!-- <script>
export default {
  name: "FullWidthEventCard",
  data() {
    return {
      eventImage:
        "https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png",
    };
  },
};
</script> -->
<style>
.checkbox:checked {
  border: none;
}
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
