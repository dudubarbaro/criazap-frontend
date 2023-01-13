<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import dayjs from "dayjs";
// import locale_pt_br from "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default {
  props: ["comentarios"],
  data() {
    return {
      superuser: "",
      value: 1,
      user: {},
    };
  },
  computed: {
    ...mapState(useAuthStore, ["is_superuser"]),
  },
};
</script>

<template>
  <div class="full">
    <div class="font-bold text-xl">
      <h1>{{ comentarios.autor.username }}</h1>
      <div
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <h2>{{ comentarios.texto }}</h2>
        <div class="">
          <a>{{ comentarios.data }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  background-color: #fff0ac;
}
.remove {
  display: flex;
  align-items: center;
}
.fuso a {
  font-size: 10pt;
  font-weight: 300pt;
  background: #eef;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.comentarios {
  max-height: 500px;
  max-width: 750px;
  border-radius: 0px 10px 10px 10px;
  border: 1px solid #eef;
  background-color: #afafaf;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}
h1 {
  background: -webkit-linear-gradient(45deg, #333333, #141414);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16pt;
}
h2 {
  word-break: break-all;
  margin-top: 7px;
  margin-left: 10px;
  font-size: 10pt;
}
.full {
  max-width: 500px;
  margin-left: 5%;
  display: flex;
  color: #eff;
} */
</style>
