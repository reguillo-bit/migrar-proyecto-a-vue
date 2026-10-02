import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import CardComponent from "./components/CardComponent.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Skeleton from "primevue/skeleton";

const app = createApp(App).use(router);

app.component("FooterComponent", FooterComponent);
app.component("HeaderComponent", HeaderComponent);
app.component("LoginComponent", LoginComponent);
app.component("CardComponent", CardComponent);
app.use(VueAxios, Axios);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  license: "PRIMEUI-LICENSE-KEY",
});
app.component("ButtonPrime", Button);
app.component("SkeletonPrime", Skeleton);

app.mount("#app");
