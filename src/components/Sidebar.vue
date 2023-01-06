<template>
  <aside>
    <div class="shield">
      <div class="perfil">
        <router-link to="/perfil">
          <i class="fa-solid fa-user"></i>
          <span>Meu Perfil</span>
        </router-link>
      </div>
      <div class="status">
        <router-link to="/status">
          <i class="fa-regular fa-pen-to-square"></i>
          <span>Status</span>
        </router-link>
      </div>
      <div class="chat">
        <router-link to="/chat">
          <i class="fa-solid fa-comment-dots"></i>
          <span>Conversa</span>
        </router-link>
      </div>
      <div class="gear">
        <router-link to="/config">
          <i class="fa-solid fa-gear"></i>
          <span>Configurações</span>
        </router-link>
      </div>
      <div class="about">
        <router-link to="/about">
          <i class="fa-sharp fa-solid fa-address-card"></i>
          <span>Sobre Nós</span>
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
span {
  color: #eef;
  font-family: "Poppins", sans-serif;
  display: none;
}

span:hover {
  visibility: visible;
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
i {
  cursor: pointer;
  color: #eef;
  font-size: 20pt;
  margin-top: 10px;
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
