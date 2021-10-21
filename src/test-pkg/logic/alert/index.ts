import { defineLogicMaker } from "@/lib";
import { pkgName } from '../../const-value';

export default defineLogicMaker({
    name: "alert",
    package: pkgName,
    makeLogic: () => {
        return () => {
            alert("hhhh")
        }
    }
})