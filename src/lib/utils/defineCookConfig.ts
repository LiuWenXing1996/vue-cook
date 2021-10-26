
import ICookConfig from '$/types/ICookConfig';
import defaultResourceMakerList from './defaultResourceMakerList';
import defaultSplitPanelConfigList from './defaultSplitPanelConfigList';

type ICookEditorConfigOptions = Partial<ICookConfig>

export default function defineCookConfig(config?: ICookEditorConfigOptions): ICookConfig {
    config = config || {}
    const _config: ICookConfig = {
        pages: config.pages || [],
        resourceMakerList: config.resourceMakerList || defaultResourceMakerList,
        editor: {
            splines: config?.editor?.splines || defaultSplitPanelConfigList,
            pageEditingUidList: config?.editor?.pageEditingUidList || [],
            componentFousedUid: config?.editor?.componentFousedUid || undefined,
            componentSelectedUid: config?.editor?.componentSelectedUid || undefined,
        },
        palyer: {
            pageUid: config?.palyer?.pageUid
        }
    }
    return _config;
}