import { reactive, Ref, ref } from "vue"
import IProjectConfig from "../types/IProjectConfig"
import { RootAppMaker } from "$/built-in-resources/component-makers"
import getComponentConfigDefault from "$/utils/getComponentConfigDefault";
import getWindowConfigDefault from "$/utils/getWindowConfigDefault";

const rootAppConfig = getComponentConfigDefault(RootAppMaker)

const config = reactive<IProjectConfig>({
    rootComponentConfig: rootAppConfig,
    floatWindowConfigList: []
})

export default function useProjectConfig() {
    return config
}