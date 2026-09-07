<template>
  <div class="rastreo-page-container">
    <div class="marco-exterior">
      <div class="panel">
        <div class="fila-principal">
          <div class="iconos-laterales">
            <div class="icono">
              <img src="@/assets/marcador-de-posicion.png" alt="icono 1" />
            </div>
            <div class="icono">
              <img src="@/assets/carrito-de-compras.png" alt="icono 2" />
            </div>
            <div class="icono">
              <img src="@/assets/mas.png" alt="icono 3" />
            </div>
          </div>

          <div class="zona-imagen">
            <img src="@/assets/mapa.png" alt="mapa" />
          </div>
        </div>

        <div class="barra-inferior">
          <div class="texto-inferior">Dirección:</div>
          <div class="boton-inferior">
            <button>Ver más</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Importamos el Footer al final de la vista de rastreo -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "RastreoView",
  components: {
    FooterComponent
  }
};
</script>

<style scoped>
.rastreo-page-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px); /* Resta la altura de tu HeaderComponent */
  background-color: #3a3a3a;
  width: 100%;
}

.marco-exterior {
  background: #3a3a3a;
  padding: 32px 16px;
  display: flex;
  justify-content: center;
  flex: 1;
}

.panel {
  background: #3a3a3a;
  border: 2px solid #00c896;
  width: 75%;
  display: flex;
  flex-direction: column;
}

.fila-principal {
  display: flex;
  height: 500px;
}

.iconos-laterales {
  background: linear-gradient(180deg, #0a0a0a, #252525);
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 6px;
  border-right: 1px solid #00c89640;
}

.icono {
  width: 30px;
  height: 30px;
  background-color: #1a1a1a;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #00c896;
}

.icono img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zona-imagen {
  width: calc(100% - 44px);
  height: 100%;
  background-color: #111111;
}

.zona-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.barra-inferior {
  display: flex;
  gap: 6px;
  padding: 8px;
  background: #3a3a3a;
  height: 52px;
  border-top: 1px solid #00c89640;
}

.texto-inferior {
  flex: 1;
  background-color: #141414;
  border-radius: 3px;
  padding: 0 14px;
  font-size: 0.85rem;
  color: #cccccc;
  display: flex;
  align-items: center;
  border: 1px solid #00c89640;
}

.boton-inferior {
  width: 280px;
  background-color: #4a9bd1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boton-inferior button {
  background: none;
  border: none;
  font-size: 0.85rem;
  color: #0a0a0a;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.boton-inferior button:hover {
  color: #ffffff;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .panel { width: 95%; }
  .fila-principal { height: 350px; }
  .boton-inferior { width: 150px; }
}

@media (max-width: 480px) {
  .panel { width: 100%; }
  .fila-principal { height: 250px; }
  .barra-inferior { flex-direction: column; height: auto; }
  .boton-inferior { width: 100%; height: 40px; }
  .iconos-laterales { width: 34px; }
}
</style>
