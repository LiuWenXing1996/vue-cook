import isLogicConfig from "./isLogicConfig";

export default function parseLogicConfig(jsonString?: string) {
    if (jsonString) {
        let config;
        try {
            config = JSON.parse(jsonString)
        } catch (e) {
            console.log(e)
        }
        if (isLogicConfig(config)) {
            return config
        }
    }
}