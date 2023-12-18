import { createApp } from "vue";
import App from "./App";
import router from "./router";
import VueScreen from 'vue-screen';
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "./assets/styles/main";
import './assets/styles/global.css';
import 'aos/dist/aos.css'
// Global components
import { QuillEditor } from "@vueup/vue-quill";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);
app.use(VueScreen);
app.use(router).use(Notifications);
app.mount("#app");
