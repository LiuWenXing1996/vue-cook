import useLogicMaker from "../hooks/useLogicMaker";
import ICookState from "../types/ICookState";
import ILogicConfig from "../types/ILogicConfig";

export default async function logicRun<T = unknown>(cookState: ICookState, config: ILogicConfig, ...payload: []): Promise<T> {
    let returns;
    const maker = useLogicMaker(cookState, config.makerName, config.makerPkg).value
    if (maker) {
        let func = maker.make(config)
        returns = await func(...payload)
    }
    return returns as T
}