import IPanelMaker from "../types/IPanelMaker";
import IPanelConfig from '@/lib/types/IPanelConfig';

type IPanelMakerOptions<T extends IPanelConfig = IPanelConfig> = Omit<IPanelMaker<T>, "type">

export default function definePanelMaker<T extends IPanelConfig = IPanelConfig>(maker: IPanelMakerOptions<T>): IPanelMaker<T> {
    const _maker: IPanelMaker<T> = {
        type: "panel",
        ...maker
    }
    return _maker
}