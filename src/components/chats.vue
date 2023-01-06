<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
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
    <div class="comentarios">
      <RouterLink to="/singout"
        ><h1>{{ comentarios.autor.username }}</h1></RouterLink
      >
      <div class="fuso">
        <h2>{{ comentarios.texto }}</h2>
        <a>{{ comentarios.data }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaflet-popup-content-wrapper,
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
  background-color: #a3944f;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}
h1 {
  background: -webkit-linear-gradient(45deg,
    #d3c6cc,
    #e2c3c6,
    #eecfc4,
    #f8e6c6,
    #ffffcc);
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
}
</style>