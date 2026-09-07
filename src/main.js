import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Creamos la aplicación
const app = createApp(App);

// Conectamos el enrutador
app.use(router);

// Montamos la aplicación al final de todo
app.mount("#app");
