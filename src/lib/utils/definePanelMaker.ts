import IPanelMaker from "../types/IPanelMaker";
import IPanelConfig from '@/lib/types/IPanelConfig';
import IMakerMethods from "../types/IMakerMethods";

type IPanelMakerOptions<
    T extends IPanelConfig = IPanelConfig,
    M extends IMakerMethods = IMakerMethods> = Omit<IPanelMaker<T, M>, "type">

export default function definePanelMaker<
    T extends IPanelConfig = IPanelConfig,
    M extends IMakerMethods = IMakerMethods>(maker: IPanelMakerOptions<T, M>): IPanelMaker<T, M> {
    const _maker: IPanelMaker<T, M> = {
        type: "panel",
        ...maker
    }
    return _maker
}


