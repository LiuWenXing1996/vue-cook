import { ref } from "vue";
import { RouteRecordRaw } from "vue-router";

const routes = ref<RouteRecordRaw[]>([])

export default function useRoutes() {
    return routes
}