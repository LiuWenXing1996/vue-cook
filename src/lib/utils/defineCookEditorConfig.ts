import ICookEditorConfig from '$/types/ICookEditorConfig';
import defaultResourceMakerList from './defaultResourceMakerList';
import defaultSplitPanelConfigList from './defaultSplitPanelConfigList';

type ICookEditorConfigOptions = Partial<ICookEditorConfig>

export default function defineCookEditorConfig(config?: ICookEditorConfigOptions): ICookEditorConfig {
    config = config || {}
    const _config: ICookEditorConfig = {
        pages: config.pages || [],
        splines: config.splines || defaultSplitPanelConfigList,
        makerList: config.makerList || defaultResourceMakerList,
        pageEditingUidList: config.pageEditingUidList || [],
        componentFousedUid: config.componentFousedUid || undefined,
        componentSelectedUid: config.componentSelectedUid || undefined,
    }
    return _config;
}