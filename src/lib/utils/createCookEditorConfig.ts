import ICookEditorConfig from '@/lib/types/ICookEditorConfig';
import defaultResourceMakerList from './defaultResourceMakerList';
import defaultSplitPanelConfigList from './defaultSplitPanelConfigList';
import createMessageBus from './createMessageBus';
import { ref, Ref } from 'vue';

type ICookEditorConfigOptions = Partial<ICookEditorConfig>

export default function createCookEditorConfig(config?: ICookEditorConfigOptions): Ref<ICookEditorConfig> {
    config = config || {}
    const _config: ICookEditorConfig = {
        pages: config.pages || [],
        splines: config.splines || defaultSplitPanelConfigList,
        makerList: config.makerList || defaultResourceMakerList,
        componentSelectedUid: config.componentSelectedUid || undefined,
        messageBus: createMessageBus()
    }
    return ref(_config);
}