import IWindowConfig from "../types/IWindowConfig";
import { v4 as uuidv4 } from 'uuid';
import IWindowMaker from "../types/IWindowMaker";

export default function getWindowConfigDefault(maker: IWindowMaker): IWindowConfig {
    const uid = uuidv4();
    let config: IWindowConfig = {
        uid,
        makerName: maker.name,
        makerPackage: maker.package
    };
    return config
}