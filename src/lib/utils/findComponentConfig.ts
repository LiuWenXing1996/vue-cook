import IComponentConfig from "@/lib/types/IComponentConfig";

const findComponentConfig = (parent: IComponentConfig, id: string): IComponentConfig | undefined => {
    let configFound: IComponentConfig | undefined;
    if (parent.uid === id) {
        configFound = parent
    } else {
        const slots = parent?.slots;
        if (slots) {
            const keys = Object.keys(slots)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const configList = slots[key];
                for (let j = 0; j < configList.length; j++) {
                    const config = configList[j];
                    configFound = findComponentConfig(config, id)
                    if (configFound) {
                        return configFound;
                    }
                }
                if (configFound) {
                    break;
                }
            }
        }
    }
    return configFound;
}

export default findComponentConfig