<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
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
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "InterfazView",
  components: {
    HeaderComponent,
    FooterComponent,
    CardComponent,
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
        .get("https://api-comidas-app.onrender.com/comidas")
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
}

/* El contenido ocupa todo el espacio restante abajo del menú */

.conten {
  display: grid;
  justify-self: center;
  align-self: center;
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 20px;
  gap: 50px;
  background-color: black;
  border-radius: 20px;
}
</style>
