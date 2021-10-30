import ICookEditorState from '@/lib/types/ICookEditorState';
import defaultPreInstallMakerList from './defaultPreInstallMakerList';
import defaultSplitPanelConfigList from './defaultSplitPanelConfigList';
import { reactive } from 'vue';
import IResourceMaker from '@/lib/types/IResourceMaker';
import { useStorage } from '@vueuse/core'

type ICookEditorStateOptions = Partial<Omit<ICookEditorState, "install" | "getMakerList">> & {
    preInstallMakerList?: IResourceMaker[]
}


// import { defineCookConfig } from '$/index';


// const cookConfig = useStorage("cookConfig", defineCookConfig({
//     pages: []
// }), localStorage)

// export default function useCookConfig() {
//     return cookConfig
// }

const pages = useStorage("cookEditorPages", [], localStorage)

export default function createCookEditorState(config?: ICookEditorStateOptions) {
    config = config || {}
    const makerList: IResourceMaker[] = [];
    const _config: ICookEditorState = {
        install: (maker) => {
            if (makerList.find(e => e.name === maker.name && e.pkg === maker.pkg && e.type === maker.type)) {
                return reactive(_config)
            }
            makerList.push(maker)
            maker.install?.(reactive(_config))
            return reactive(_config)
        },
        getMakerList: () => {
            return [...makerList]
        },
        pages: config.pages || [],
        splines: config.splines || defaultSplitPanelConfigList,
        extra: config.extra || {}
    }
    // 安装默认maker
    const _defaultPreInstallMakerList = config.preInstallMakerList || defaultPreInstallMakerList
    _defaultPreInstallMakerList.map(e => _config.install(e))
    // 存储pages
    useStorage("cookEditorPages", _config.pages, localStorage)
    return reactive(_config);
}