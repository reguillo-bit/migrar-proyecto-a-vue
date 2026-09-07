<template>
  <div class="interfaz-container">
    <!-- El menú siempre se queda fijo aquí arriba -->
    <HeaderComponent />
    
    <!-- Aquí abajo se cargará dinámicamente tu mapa o cualquier otra sección -->
    <main class="contenido-dinamico">
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "InterfazView",
  components: {
    HeaderComponent,
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
</style>
