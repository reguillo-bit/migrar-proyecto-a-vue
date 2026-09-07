<template>
  <footer>
    <div class="footer-columnas">
      <div class="footer-columna">
        <h3>WingIng</h3>
        <p>Delivery con drones</p>
        <p>rápido, seguro y en tiempo real.</p>
      </div>

      <div class="footer-columna">
        <h3>Navegación</h3>
        <p>Inicio</p>
        <p>Rastreo</p>
        <p>Acerca de</p>
        <p>Contacto</p>
      </div>

      <div class="footer-columna">
        <h3>Contacto</h3>
        <p>📧 contacto@winging.com</p>
        <p>📞 +57 300 123 4567</p>
        <p>📍 Santa Marta, Colombia</p>
      </div>
    </div>

    <div class="footer-final">
      <p>2026 WingIng. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background-color: #2a2a2a;
  padding: 40px 20px 20px 20px;
  border-top: 2px solid rgb(1, 209, 252);
  width: 100%;
}
.footer-columnas {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 30px;
}
.footer-columna h3 {
  color: #00d4ff;
  font-size: 0.9rem;
  margin-bottom: 12px;
}
.footer-columna p,
.footer-columna a {
  color: #888888;
  font-size: 0.82rem;
  margin-bottom: 8px;
  text-decoration: none;
  display: block;
}
.footer-columna a:hover {
  color: #00d4ff;
}
.footer-final {
  text-align: center;
  border-top: 2px solid rgb(1, 209, 252);
  padding-top: 16px;
}
.footer-final p {
  color: #444444;
  font-size: 0.75rem;
}
@media (max-width: 768px) {
  .footer-columnas {
    gap: 30px;
  }
}
@media (max-width: 480px) {
  .footer-columnas {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }
}
</style>
