import IPanelMaker from "../types/IPanelMaker";

type IPanelMakerOptions = Omit<IPanelMaker, "type">

export default function definePanelMaker(maker: IPanelMakerOptions): IPanelMaker {
    const _maker: IPanelMaker = {
        type: "panel",
        ...maker
    }
    return _maker
}