<template>
  <section class="home-section">
    <div class="all">
      <Sidebar />
      <main class="about-page">
        <h1>About</h1>
        <p>This is the About page</p>
      </main>
    </div>
  </section>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: { Sidebar },
};
</script>
<style scoped>
.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}

.home-section {
  position: relative;
  background-color: var(--color-body);
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
}

.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}
.all {
  display: flex;
  left: 300px;
  width: calc(100% - 250px);
}

.about-page {
  width: 100vw;
}
</style>
