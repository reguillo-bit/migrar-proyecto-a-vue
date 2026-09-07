import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoginComponent from "@/components/LoginComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

const app = createApp(App).use(router).mount("#app");
app.component("LoginComponent", LoginComponent);
app.component("HeaderComponent", HeaderComponent);
