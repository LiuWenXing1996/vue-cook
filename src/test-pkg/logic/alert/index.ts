import { defineLogicMaker } from "@/lib";
import { pkgName } from '../../const-value';

export default defineLogicMaker({
    name: "alert",
    pkg: pkgName,
    params: ["msg"],
    make: (config) => {
        return () => {
            alert(config.params["msg"])
        }
    }
})