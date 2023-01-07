<template>
  <div class="all">
    <Sidebar />
    <main class="about-page">
      <h1>About</h1>
      <p>This is the About page</p>
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
  left: 300px;
  width: calc(100% - 250px);
}

.about-page {
  width: 100vw;
}
</style>
