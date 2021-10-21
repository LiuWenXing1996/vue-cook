import useLogicMaker from "../hooks/useLogicMaker";
import ILogicConfig from "../types/ILogicConfig";

export default function logicCompiler(config: ILogicConfig, payload: any) {
    let returns;
    const maker = useLogicMaker(config.makerName, config.makerPackage).value
    if (maker) {
        let func = maker.makeLogic(config)
        returns = func(payload)
    }
    return returns
}