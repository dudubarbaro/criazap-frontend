<template>
  <Sidebar />
  <main class="home-page">
    <h1>home</h1>
    <p>This is the home page</p>
  </main>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>
<style scoped>
.home-page {
  width: 100vw;
}
</style>
