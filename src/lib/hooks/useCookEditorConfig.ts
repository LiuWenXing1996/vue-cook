import { reactive } from 'vue';
import ICookEditorConfig from '$/types/ICookEditorConfig';
import rootAppMaker from "$/built-in-resources/components/root-app"
import makeComponentConfigDefault from '$/utils/makeComponentConfigDefault';


const rootAppConfig = makeComponentConfigDefault(rootAppMaker)

const config = reactive<ICookEditorConfig>({
    rootComponentConfig: rootAppConfig,
})

export default function useCookEditorConfig() {
    return config
}