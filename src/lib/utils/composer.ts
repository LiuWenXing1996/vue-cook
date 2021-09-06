import useCompositionConfig from "../hooks/useComponsitionConfig";
import useCompositionMaker from "../hooks/useCompositionMaker";
import ICompositionConfig from "../types/ICompositionConfig";

export default function composer(config?: ICompositionConfig) {
    let returns;
    let args: Record<string, any> = {}
    if (config) {
        if (config?.data?.args) {
            const keys = Object.keys(config?.data?.args);
            keys.map((key) => {
                let value = config.data?.args?.[key];
                if (value) {
                    let _config = useCompositionConfig(value).value;
                    args[key] = composer(_config)
                }
            })
        }
        const maker = useCompositionMaker(config?.maker).value
        if (maker) {
            let func = maker.body(config)
            returns = func.call({}, args)
        }
    }
    return returns
}