import ILogicConfig from "$/types/ILogicConfig";
import { v4 as uuidv4 } from 'uuid';
import ILogicMaker from "$/types/ILogicMaker";

export default function makeLogicConfigDefault(maker: ILogicMaker): ILogicConfig {
    const uid = uuidv4();
    const params: ILogicConfig["params"] = {}
    maker?.params?.map(e => {
        params[e] = ""
    })

    let config: ILogicConfig = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPackage: maker.package,
        params
    };
    return config
}