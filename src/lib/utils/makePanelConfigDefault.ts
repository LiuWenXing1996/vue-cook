import IComponentConfig from "$/types/IComponentConfig";
import { v4 as uuidv4 } from 'uuid';
import IFuctionConfig from "../types/IFuctionConfig";
import IPanelConfig from "../types/IPanelConfig";
import IPanelMaker from "../types/IPanelMaker";

export default function makePanelConfigDefault(maker: IPanelMaker): IPanelConfig {
    const uid = uuidv4();
    let config: IPanelConfig = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPackage: maker.package,
        title: uid
    };
    return config
}