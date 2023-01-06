<template>
  <div class="all">
    <Sidebar />
    <main class="status-page">
      <h1>status</h1>
      <p>This is the status page</p>
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

.status-page {
  width: 100vw;
}
</style>
