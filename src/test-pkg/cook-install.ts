import { defineCookInstallFunc } from "@/lib";
import * as componentMakes from "./components"

export default defineCookInstallFunc(({ resourceMakerList }) => {
    const needInstallcomponentMakerList = Object.entries(componentMakes).map(e => e[1])
    resourceMakerList.push(...needInstallcomponentMakerList)
})