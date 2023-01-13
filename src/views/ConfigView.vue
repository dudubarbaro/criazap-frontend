<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  user: {},
  superuser: "",
  computed: {
    ...mapState(useAuthStore, ["id", "is_superuser", "username"]),
  },
};
</script>
<template>
  <section class="home-section">
    <div class="all">
      <div class="avatar">
        <img src="../assets/semfoto.png" alt="teste" />
      </div>
      <main class="config-page">
        <div class="alter">
          <h1>Oque voce deseja alterar?</h1>
          <input type="text" placeholder="Nome de usuario" />
          <input type="text" placeholder="Email de usuario" />
          <input type="password" placeholder="Digite sua nova senha" />
          <input type="password" placeholder="Confirme sua nova senha" />
          <div class="buttons">
            <div class="alt">
              <button>Alterar</button>
            </div>
            <div class="des">
              <button>Deslogar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins";
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.alter {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.buttons {
  display: flex;
}

button {
  margin-right: 10px;
}

main {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

img {
  margin-right: 30px;
  border-radius: 50%;
}

input {
  border: solid 1px #cac7c9;
  margin-right: 10px;
  width: 395px;
  padding: 10px;
  border-radius: 8px;
  height: 40px;
  outline: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

h1 {
  background: -webkit-linear-gradient(45deg, #836c64, #5e585b, #c0acae);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.circle-1 {
  position: absolute;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(45deg, #eecfc4, #d3c6cc, #c0acae);
  clip-path: circle(40% at left 80%);
  z-index: 0;
}
.circle-2 {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(45deg, #8a93e4, #d3c6cc, #fffccc);
  clip-path: circle(40% at right 80%);
  z-index: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  background: rgba(247, 244, 207, 0.27);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(247, 244, 207, 0.3);
}

span {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.title {
  margin-bottom: 7%;
}

button {
  font-weight: 700;
  border-radius: 50px;
  height: 50px;
  width: 200px;
  margin-top: 10%;
  color: #181616;
  border: solid 1px #cac7c9;
}

button:hover {
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  border: 4px solid #eecfc4;
  background-color: #181616;
  color: #eef;
  transition: 0.5s;
}
</style>
