import IPanelConfig from "@/lib/types/IPanelConfig";

export default function makeDomId(config: IPanelConfig) {
    return `vue-cook-${config.uid}`
}