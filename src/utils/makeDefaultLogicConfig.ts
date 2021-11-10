import ILogicConfig from "@/types/ILogicConfig";
import { v4 as uuidv4 } from 'uuid';
import ILogicMaker from "@/types/ILogicMaker";

export default function makeDefaultLogicConfig(maker: ILogicMaker): ILogicConfig {
    const uid = uuidv4();
    let config: ILogicConfig = {
        uid,
        name: maker.name,
        makerType: "logic",
        makerName: maker.name,
        makerPkg: maker.pkg,
    };
    return config
}