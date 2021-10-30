import { v4 as uuidv4 } from 'uuid';
import IPanelConfig from "../types/IPanelConfig";
import IPanelMaker from '../types/IPanelMaker';

export default function makeEmptyPanelConfig<
    T extends Record<string, string> = Record<string, string>>(maker: IPanelMaker<IPanelConfig<T>>): IPanelConfig<T> {
    const uid = uuidv4();
    let config: IPanelConfig<T> = {
        uid,
        name: maker.name,
        makerName: maker.name,
        makerPkg: maker.pkg,
    };
    return config
}

