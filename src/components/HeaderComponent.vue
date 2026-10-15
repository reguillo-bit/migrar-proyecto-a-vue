<template>
  <header>
    <h1>Whining</h1>
    <div class="menu-conten">
      <span v-show="this.sesion == true">
        <p class="menu" @click="abrirfrom">agregar</p>
      </span>
      <p class="menu" @click="inicio">inicio</p>
      <p class="menu" @click="rastreo">rastreo</p>
      <p class="menu">acerca de</p>
      <p class="menu">contacto</p>
    </div>
    <span v-show="abrir">
      <section class="formulario">
        <input
          type="text"
          name="nombres_c"
          placeholder="nombre:"
          class="text"
          v-model="nuevacomida.nombre"
        />
        <input
          type="number"
          name="precio_c"
          placeholder="precio:"
          class="text"
          v-model="nuevacomida.precio"
        />

        <input
          type="text"
          name="url_image"
          placeholder="url:"
          class="text"
          v-model="nuevacomida.imagen"
        />
        <button @click="createcomida" class="boton">guardar</button>
      </section>
    </span>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    buscar: Boolean,
  },
  data() {
    return {
      sesion: localStorage.getItem("sesion") === "true",
      local: JSON.parse(localStorage.getItem("comidas") || "[]"),
      abrir: false,
      nuevacomida: {
        nombre: "",
        precio: 0,
        imagen: "",
      },
    };
  },
  methods: {
    rastreo() {
      this.$router.push({ name: "RastreoView" });
    },
    inicio() {
      this.$router.push({ name: "InterfazView" });
    },
    createcomida: async function () {
      await this.axios
        .post("https://api-comidas-phio.onrender.com/comidas", {
          nombre: this.nuevacomida.nombre,
          precio: this.nuevacomida.precio,
          imagen: this.nuevacomida.imagen,
        })
        .then((response) => {
          console.log(response.data);
          this.local.push(response.data);
          localStorage.setItem("comidas", JSON.stringify(this.local));
          console.log("comidas", JSON.stringify(this.local));
        });
    },
    abrirfrom() {
      this.abrir = true;
    },
  },
};
</script>

<style>
.boton {
  height: 30px;
  width: 60px;
}
.text {
  width: 80%;
  height: 15%;
  border-radius: 10px;
}
.formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  border-radius: 20px;
  z-index: 1000;
  bottom: 300px;
  right: 200px;
  left: 800px;
  width: 300px;
  height: 300px;
  background-image: linear-gradient(
    rgb(173, 63, 63),
    rgb(121, 0, 0),
    rgb(173, 63, 63)
  );
  opacity: 90%;
}
header {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 0;
  padding: 0 20px;
  background-color: rgb(27, 26, 27);
  border-bottom: 2px solid rgb(1, 209, 252);
}

h1 {
  margin: 0;
  color: rgb(1, 209, 252);
  text-align: left;
}
.menu-conten {
  display: flex;
  gap: 50px;
  height: 100px;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
.menu {
  font-weight: 100px;
  color: aliceblue;
  text-decoration: none; /* Evita que se subraye el texto del enlace */
}
.menu:hover {
  color: rgb(1, 209, 252);
  cursor: pointer;
}
</style>
