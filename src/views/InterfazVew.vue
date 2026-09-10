<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
    <section class="conten">
      <CardComponent
        v-for="carta in cartas"
        :key="carta.nombre"
        :imagen="carta.imagen"
        :nombre="carta.nombre"
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
      cartas: [
        {
          imagen:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=85",
          nombre: "comida 1",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=85",
          nombre: "comida 2",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=85",
          nombre: "comida 3",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=85",
          nombre: "comida 4",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85",
          nombre: "comida 5",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=85",
          nombre: "comida 6",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=85",
          nombre: "comida 7",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85",
          nombre: "comida 8",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85",
          nombre: "comida 9",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85",
          nombre: "comida 10",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85",
          nombre: "comida 11",
        },
        {
          imagen:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85",
          nombre: "comida 12",
        },
      ],
    };
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 50px;
  background-color: black;
  border-radius: 20px;
}
</style>
