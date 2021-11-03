import ICookInstallFunc from "../types/ICookInstallFunc"
import useResourceMakerList from "../hooks/useResourceMakerList"

export default function installPkg({ cookInstall }: { cookInstall: ICookInstallFunc }, options?: any) {
    cookInstall({
        resourceMakerList: useResourceMakerList().value,
        options
    })
}