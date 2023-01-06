<template>
  <aside>
    <div class="circle">
      <div class="perfil">
        <router-link to="/perfil">
          <i class="fa-solid fa-user"></i>
        </router-link>
      </div>
    </div>
    <div class="circle">
      <div class="status">
        <router-link to="/status">
          <i class="fa-regular fa-pen-to-square"></i>
        </router-link>
      </div>
    </div>
    <div class="circle">
      <div class="chat">
        <router-link to="/chat">
          <i class="fa-solid fa-comment-dots"></i>
        </router-link>
      </div>
    </div>
    <div class="circle">
      <div class="gear">
        <router-link to="/config">
          <i class="fa-solid fa-gear"></i>
        </router-link>
      </div>
    </div>
    <div class="circle">
      <div class="about">
        <router-link to="/about">
          <i class="fa-sharp fa-solid fa-address-card"></i>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SIDEBAR",
};
</script>

<style scoped>
.circle {
  margin-bottom: 2rem;
  margin-left: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3a3737;
}

.circle:hover {
  transition: 0.5s;
  height: 50px;
  background-color: #3a3737;
  width: 200px;
  border-radius: 200px;
}
.circle i {
  justify-content: center;
  display: flex;
  cursor: pointer;
  color: #eef;
  font-size: 20pt;
  margin-top: 10px;
}

aside {
  width: 320px;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #d3c6cc,
    #e2c3c6,
    #eecfc4,
    #f8e6c6,
    #ffffcc
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.shield {
  padding: 4px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 250px;
  border-radius: 0 8px 8px 0;
  width: 40px;
  background-color: #3a3737;
}

.shield:hover {
  cursor: pointer;
  transition: 0.5s;
  width: 200px;
}
</style>
