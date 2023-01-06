<template>
  <Sidebar />
  <main class="status-page">
    <h1>status</h1>
    <p>This is the status page</p>
  </main>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar },
};
</script>
<style scoped>
.status-page {
  width: 100vw;
}
</style>
