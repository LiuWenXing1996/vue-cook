import { defineCookInstallFunc } from "@";
import * as componentMakers from "./components"
import * as logicMakers from "./logic"

export default defineCookInstallFunc(({ resourceMakerList }) => {
    const needInstallcomponentMakerList = Object.entries(componentMakers).map(e => e[1])
    resourceMakerList.push(...needInstallcomponentMakerList)
    const needInstallLogicMakerList = Object.entries(logicMakers).map(e => e[1])
    resourceMakerList.push(...needInstallLogicMakerList)
})