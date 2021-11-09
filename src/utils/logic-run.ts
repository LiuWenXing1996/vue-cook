import useLogicMaker from "../hooks/useLogicMaker";
import ICookPlayerState from "../types/ICookPlayerState";
import ILogicConfig from "../types/ILogicConfig";

export default async function logicRun<T = unknown>(cookState: ICookPlayerState, config: ILogicConfig, ...payload: any[]): Promise<T> {
    let returns;
    const maker = useLogicMaker(cookState, config.makerName, config.makerPkg).value
    if (maker) {
        let func = maker.make(config, cookState)
        returns = await func(...payload)
    }
    return returns as T
}