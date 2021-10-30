import { v4 as uuidv4 } from 'uuid';
import IPanelConfig from "../types/IPanelConfig";
import IPanelMaker from '../types/IPanelMaker';
import makeEmptyPanelConfig from './makeEmptyPanelConfig';

export default function makeDefaultPanelConfig<
    T extends Record<string, string> = Record<string, string>>(maker: IPanelMaker<IPanelConfig<T>>): IPanelConfig<T> {
    if (maker.makeDefaultConfig) {
        return maker.makeDefaultConfig()
    }
    return makeEmptyPanelConfig<T>(maker)
}