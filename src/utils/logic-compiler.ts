import useLogicMaker from "../hooks/useLogicMaker";
import ICookState from "../types/ICookState";
import ILogicConfig from "../types/ILogicConfig";

export default function logicCompiler(cookState: ICookState, config: ILogicConfig, payload: any) {
    let returns;
    const maker = useLogicMaker(cookState, config.makerName, config.makerPkg).value
    if (maker) {
        let func = maker.make(config)
        returns = func(payload)
    }
    return returns
}