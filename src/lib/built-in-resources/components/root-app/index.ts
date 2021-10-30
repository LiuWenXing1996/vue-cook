import { markRaw } from 'vue';
import defineComponentMaker from "@/lib/utils/defineComponentMaker"
import Component from "./RootApp.vue";
import { pkgName } from '@/lib/utils/const';

export default defineComponentMaker({
    name: "主应用",
    pkg: pkgName,
    slots: ["default"],
    make: () => markRaw(Component)
})