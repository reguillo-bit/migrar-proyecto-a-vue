import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

const app = createApp(App).use(router);

app.component("FooterComponent", FooterComponent);
app.component("HeaderComponent", HeaderComponent);
app.component("LoginComponent", LoginComponent);

app.mount("#app");
