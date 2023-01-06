<template>
  <Sidebar />
  <main class="about-page">
    <h1>About</h1>
    <p>This is the About page</p>
  </main>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar },
};
</script>
<style scoped>
.about-page {
  width: 100vw;
}
</style>
