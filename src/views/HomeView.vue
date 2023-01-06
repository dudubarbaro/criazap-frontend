<template>
  <div class="all">
    <Sidebar />
    <main class="home-page">
      <h1>home</h1>
      <p>This is the home page</p>
    </main>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>
<style scoped>
.all {
  display: flex;
}

.home-page {
  width: 100vw;
}
</style>
