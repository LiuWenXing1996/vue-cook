import ILogicConfig from '@/types/ILogicConfig';
export default function isLogicConfig(config: any): config is ILogicConfig {
    if (!config) {
        return false
    }
    if (
        !config.uid ||
        !config.name ||
        !config.makerType ||
        !config.makerName ||
        !config.makerPkg
    ) {
        return false
    }
    if (config.makerType !== "logic") {
        return false
    }
    return true
}