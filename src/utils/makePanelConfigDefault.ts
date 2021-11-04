import { v4 as uuidv4 } from 'uuid';
import IPanelConfig from "../types/IPanelConfig";

export default function makePanelConfigDefault(name: string, makerName: string, makerPkg: string): IPanelConfig {
    const uid = uuidv4();
    let config: IPanelConfig = {
        uid,
        name,
        makerName,
        makerPkg
    };
    return config
}