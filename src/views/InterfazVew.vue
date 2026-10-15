<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
    <section class="novisible">
      <div class="slider-area">
        <SliderComponent />
      </div>

      <section class="conten">
        <article v-show="load == false" class="conten">
          <SkeletonPrime v-for="n in 7" :key="n" height="16rem"></SkeletonPrime>
        </article>
        <article v-show="load == true" class="conten">
          <CardComponent
            v-for="comida in comidas"
            :key="comida.id"
            :imagen="comida.imagen"
            :nombre="comida.nombre"
            :id="comida.id"
            :costo="comida.precio"
          />
        </article>
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
      load: false,
      comidas: [],
      local: JSON.parse(localStorage.getItem("comidas") || "[]"),

      currentIndex: 1,
      isTransitioning: true,
      autoplayTimer: null,
      transitionDuration: 500, // ms
    };
  },
  methods: {
    getallcomida: async function () {
      await this.axios
        .get("https://api-comidas-phio.onrender.com/comidas")
        .then((response) => {
          this.load = true;
          this.comidas = response.data;
          console.log(this.comidas);
        });
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
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

/* El contenido ocupa todo el espacio restante abajo del menú */
.novisible {
  display: grid;
  margin: 10px;
  gap: 20px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  box-sizing: border-box;
}

.slider-area {
  grid-column: span 6;
}

.conten {
  display: grid;
  grid-column: 1 / span 5;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
  min-width: 0;
  padding: 20px;
  background-color: black;
  border-radius: 20px;
  box-sizing: border-box;
}

.contecuenta {
  grid-column: 6 / -1;
  background-color: black;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
}
</style>
