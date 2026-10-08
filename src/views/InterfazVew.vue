<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
    <section class="novisible">
      <SliderComponent />
      <section class="conten">
        <CardComponent
          v-for="comida in comidas"
          :key="comida.id"
          :id="comida.id"
          :imagen="comida.imagen"
          :nombre="comida.nombre"
          :costo="comida.precio"
        />
      </section>
      <section class="contecuenta"></section>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "InterfazView",
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SliderComponent,
  },
  data() {
    return {
      comidas: [],
      loading: true,
    };
  },
  methods: {
    getallcomida: async function () {
      this.loading = true;
      await this.axios
        .get("https://api-comidas-phio.onrender.com/comidas")
        .then((response) => {
          this.comidas = response.data;
          console.log(this.comidas);
        })
        .finally(() => (this.loading = false));
    },
  },
  created() {
    this.getallcomida();
  },
};
</script>

<style>
/* Quitamos márgenes globales del navegador */
body {
  margin: 0;
  padding: 0;
  background-color: #3a3a3a;
  font-family: Arial, sans-serif;
}

/* Organizamos la pantalla en una columna vertical */
.interfaz-container {
  min-height: 100vh;
  width: 100vw;
}

/* El contenido ocupa todo el espacio restante abajo del menú */
.novisible {
  display: grid;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
}
.conten {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  padding: 20px;
  gap: 30px;
  background-color: black;
  border-radius: 20px;
  grid-column: span 5;
  grid-row: span 5;
}
.contecuenta {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: black;
  padding: 20px;
  gap: 20px;
  border-radius: 20px;
  grid-column: span 1;
  grid-row: span 5;
}
</style>
