import { computed, Ref } from 'vue';
import { useCookConfig } from '..';
import IComponentConfig from '../types/IComponentConfig';
const findConfig = (parent: IComponentConfig, id: string): IComponentConfig | undefined => {
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
                    configFound = findConfig(config, id)
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

export default function useComponentConfig(id: string) {
    return computed(() => {
        const cookConfig = useCookConfig().value;
        const { pages } = cookConfig;
        const allComponent = pages.map(e => e.component);
        let configFound: IComponentConfig | undefined;
        for (let i = 0; i < allComponent.length; i++) {
            const component = allComponent[i];
            configFound = findConfig(component, id);
            if (configFound) {
                break
            }
        }
        return configFound;
    })
}