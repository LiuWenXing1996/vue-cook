import ICompositionConfig from "../types/ICompositionConfig";
import { v4 as uuidv4 } from 'uuid';
import ICompositionMaker from "../types/ICompositionMaker";

export default function getCompositionConfigDefault(maker: ICompositionMaker): ICompositionConfig {
    const uid = uuidv4();
    let config: ICompositionConfig = {
        uid,
        maker:maker.name
    };
    return config
}