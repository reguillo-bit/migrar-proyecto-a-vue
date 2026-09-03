<template>
  <div class="caja">
    <img height="200px" width="100%" src="assets/skydrop_logo.png" alt="" />
    <input
      class="entrada"
      type="text"
      v-model="usuario"
      placeholder="Usuario"
    />
    <input
      class="entrada"
      type="password"
      v-model="contrasena"
      placeholder="Contraseña"
    />
    <button @click="iniciarsesion">Iniciar sesión</button>
    <span class="correcto" v-if="this.sesion"> acceso autorizado </span>

    <span class="error" v-else> acceso denegado </span>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",

  data() {
    return {
      usuario: "",
      contrasena: "",
      sesion: "",
    };
  },
  methods: {
    iniciarsesion() {
      if (this.usuario === "admin" && this.contrasena === "admin") {
        window.location.href = "/home";
        this.sesion = true;
      } else if (this.usuario === "" && this.contrasena === "") {
        this.sesion = "";
      }
    },
  },
};
</script>

<style>
.caja {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 700px;
  align-self: center;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #000000, #a9aaac);
}
.entrada {
  height: 30px;
  width: 70%;
  border-radius: 10px;
}
.error {
  background-color: red;
  border-radius: 10px;
  display: flex;
}
.correcto {
  background-color: green;
  border-radius: 10px;
  display: flex;
}
</style>
