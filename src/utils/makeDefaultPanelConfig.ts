import { v4 as uuidv4 } from 'uuid';
import IPanelConfig from "../types/IPanelConfig";
import IPanelMaker from '../types/IPanelMaker';

export default function makeDefaultPanelConfig(maker: IPanelMaker): IPanelConfig {
    const uid = uuidv4();
    let config: IPanelConfig = {
        uid,
        name: maker.name,
        makerType: "panel",
        makerName: maker.name,
        makerPkg: maker.pkg,
    };
    return config
}