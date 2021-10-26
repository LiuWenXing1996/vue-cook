import { defineLogicMaker } from "@/lib";
import { pkgName } from '../../const-value';

export default defineLogicMaker({
    name: "alert",
    package: pkgName,
    params: ["msg"],
    makeLogic: (config) => {
        return () => {
            alert(config.params["msg"])
        }
    }
})