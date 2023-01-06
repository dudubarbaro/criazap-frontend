<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/auth";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async submitLogin() {
      try {
        await this.login(this.user);
        this.$router.push("/");
      } catch {
        alert("Usuário ou senha invalidos!");
      }
    },
  },
};
</script>

<template>
  <div class="all">
    <div class="container">
      <div class="title">
        <h1>Login</h1>
      </div>
      <div class="input-field">
        <span>Nickname:</span>
        <input
          @keydown.enter="submitLogin()"
          v-model="user.username"
          type="text"
          placeholder="Enter your nickname" />
      </div>
      <div class="input-field">
        <span>Password:</span>
        <input
          @keydown.enter="submitLogin()"
          v-model="user.password"
          type="password"
          placeholder="Enter your password" />
      </div>
      <div class="button">
        <button @click="submitLogin()">Submit !</button>
      </div>
    </div>
    <section class="images">
      <div class="image">
        <div class="poligon"></div>
        <img src="@/assets/cria.svg" alt="" />
      </div>
    </section>
  </div>
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

.input-field {
  display: flex;
  flex-direction: column;
}

.all {
  background-color: #eef;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  padding: 60px;
  z-index: 1;
}

span {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.title {
  margin-bottom: 7%;
}

.button button {
  font-weight: 700;
  border-radius: 50px;
  height: 50px;
  width: 200px;
  margin-top: 10%;

  color: #181616;
}

.input-field input {
  padding: 10px;
  border-radius: 8px;
  height: 40px;
  outline: 0;
}

.button button:hover {
  cursor: pointer;
  letter-spacing: 2px;
  border: 4px solid #eecfc4;
  background-color: #eef;
  color: #181616;
  transition: 0.5s;
}

section.images {
  margin-left: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 0;
}

img {
  width: 30rem;
}

section.images .poligon {
  position: absolute;
  height: 90%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    #d3c6cc,
    #e2c3c6,
    #eecfc4,
    #f8e6c6,
    #ffffcc
  );
  clip-path: polygon(
    63% 3%,
    90% 20%,
    92% 61%,
    75% 100%,
    25% 100%,
    7% 59%,
    18% 19%
  );
  z-index: -1;
}

@media only screen and (min-width: 900px) and (max-width: 1200px) {
  section.images img {
    height: 20rem;
  }
  section.images .poligon {
    clip-path: polygon(
      63% 3%,
      90% 20%,
      92% 61%,
      75% 100%,
      25% 100%,
      7% 59%,
      18% 19%
    );
  }
}
@media only screen and (max-width: 900px) {
  .all {
    background: linear-gradient(
      45deg,
      #d3c6cc,
      #e2c3c6,
      #eecfc4,
      #f8e6c6,
      #ffffcc
    );
  }
  section.images {
    display: none;
    visibility: hidden;
  }
  main {
    width: 100vw;
  }
}
@media only screen and (max-width: 450px) {
  main h1 {
    font-size: 2rem;
  }
  main .alternative span {
    font-size: 0.8rem;
  }
  main form label span,
  main form input[type="submit"] {
    font-size: 1rem;
  }
}
</style>
