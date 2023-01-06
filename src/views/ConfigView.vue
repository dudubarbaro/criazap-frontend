<template>
    <Sidebar />
    <main class="config-page">
      <h1>config</h1>
      <p>This is the config page</p>
    </main>
  </template>
  <script>
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    components: { Sidebar },
  };
  </script>
  <style scoped>
  .config-page {
    width: 100vw;
  }
  </style>
  