import { createApp } from "vue";
import App from "./App";
import router from "./router";

// import bootstrap custom styles
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "./assets/styles/main";

// Global components
import { QuillEditor } from "@vueup/vue-quill";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);
app.use(router).use(Notifications);
app.mount("#app");
