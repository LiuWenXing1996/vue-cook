import { v4 as uuidv4 } from 'uuid';
import IPanelConfig from "../types/IPanelConfig";
import IPanelMaker from "../types/IPanelMaker";

export default function makePanelConfigDefault(maker: IPanelMaker): IPanelConfig {
    const uid = uuidv4();
    let config: IPanelConfig = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPackage: maker.package,
        title: maker.name
    };
    if (maker.makeTitle) {
        config.title = maker.makeTitle(config);
    }
    return config
}