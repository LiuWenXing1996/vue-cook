import { defineCookInstallFunc } from "@/lib";
import * as componentMakes from "./components"

export default defineCookInstallFunc(({ componentMakerList }) => {
    const needInstallcomponentMakerList = Object.entries(componentMakes).map(e => e[1])
    componentMakerList.push(...needInstallcomponentMakerList)
})