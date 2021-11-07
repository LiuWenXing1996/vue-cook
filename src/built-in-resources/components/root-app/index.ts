import defineComponentMaker from "@/utils/defineComponentMaker"
import RootApp from "./RootApp.vue";
import { pkgName } from '@/utils/const-value';

export default defineComponentMaker({
    name: "主应用",
    pkg: pkgName,
    makeSlotOptions: () => ["default"],
    make: () => RootApp
})