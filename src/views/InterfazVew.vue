<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
    <section class="conten"></section>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "InterfazView",
  components: {
    HeaderComponent,
    FooterComponent,
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
  overflow-x: hidden;
}

/* Organizamos la pantalla en una columna vertical */
.interfaz-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
}

/* El contenido ocupa todo el espacio restante abajo del menú */
.contenido-dinamico {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.conten {
  justify-self: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  width: 90%;
  height: 700px;
  background-color: black;
  border-radius: 20px;
}
</style>
