import IPanelMaker from "../types/IPanelMaker";
import IPanelConfig from '@/types/IPanelConfig';

type IPanelMakerOptions<
    T extends Record<string, string> = Record<string, string>> = Omit<IPanelMaker<IPanelConfig<T>>, "type">

export default function definePanelMaker<
    T extends Record<string, string> = Record<string, string>>
    (maker: IPanelMakerOptions<T>): IPanelMaker<IPanelConfig<T>> {
    const _maker: IPanelMaker<IPanelConfig<T>> = {
        type: "panel",
        ...maker
    }
    return _maker
}

