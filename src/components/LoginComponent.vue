<template>
  <div class="caja">
    <img class="logo" :src="imagen" alt="" />
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
    <!--condicionale v-if, v-else-if, v-else-->
    <span class="correcto" v-if="this.sesion === true">
      acceso autorizado
    </span>
    <span class="error" v-else-if="this.sesion === false">
      acceso denegado
    </span>

    <div class="contedor-grid">
      <button class="boton" @click="iniciarsesion">Iniciar sesión</button>

      <div class="imagen2">
        <img width="30%" :src="require('@/assets/google.png')" alt="Imagen 2" />
      </div>
      <div class="imagen3">
        <img
          width="30%"
          :src="require('@/assets/facebook.png')"
          alt="Imagen 3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    imagen: String,
  },

  data() {
    return {
      usuario: "",
      contrasena: "",
      sesion: null,
    };
  },
  methods: {
    iniciarsesion() {
      if (this.usuario === "admin" && this.contrasena === "admin") {
        window.location.href = "/home";
        this.sesion = true;
      } else if (this.usuario !== "admin" || this.contrasena !== "admin") {
        this.usuario = "";
        this.contrasena = "";
        this.sesion = false;
      }
    },
  },
};
</script>

<style>
.logo {
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 250px;
  width: 90%;
}
.caja {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 750px;
  align-self: center;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, #111111, #111111, #a9aaac);
}
.entrada {
  height: 40px;
  width: 70%;
  border-radius: 10px;
  cursor: pointer;
}
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 70%;
  background-color: red;
  border-radius: 10px;
  display: flex;
}
.correcto {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 70%;
  background-color: green;
  border-radius: 10px;
  display: flex;
}

.contedor-grid {
  display: grid;
  width: 50%;
  gap: 10px;
  height: 100px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.boton {
  grid-column: span 4;
  grid-row: span 2;
  border-radius: 10px;
  cursor: pointer;
}
.boton:hover {
  background-color: #242649;
  color: white;
}
.imagen2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: cover;
  object-fit: cover;
  grid-column: span 2;
  grid-row: span 2;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}
.imagen3 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: cover;
  object-fit: cover;
  grid-column: span 2;
  grid-row: span 2;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
