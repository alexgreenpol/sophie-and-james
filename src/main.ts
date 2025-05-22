import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import i18n from "./i18n";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@/styles/styles.scss";

createApp(App).use(router).use(i18n).use(Quasar).mount("#app");
