import ICookInstallFunc from "../types/ICookInstallFunc"
import useComponentMakerList from "../hooks/useComponentMakerList"

export default function installPkg({ cookInstall }: { cookInstall: ICookInstallFunc }) {
    cookInstall({
        componentMakerList: useComponentMakerList().value,
    })
}