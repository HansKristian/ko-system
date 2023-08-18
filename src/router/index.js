import { createRouter, createWebHistory } from 'vue-router';
import TrekkKolapp from "@/components/TrekkKolapp.vue";
import CarlOlav from "@/components/CarlOlav.vue";
import QueueDisplay from "@/components/QueueDisplay.vue";

const routes = [
  { path: "/", redirect: "/trekk-kolapp" },
  { path: "/trekk-kolapp", component: TrekkKolapp },
  { path: "/carl-olav", component: CarlOlav },
  { path: "/ko/:lopeNummer", name: "ko", component: QueueDisplay, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
