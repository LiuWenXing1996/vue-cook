import ICookConfig from "./ICookConfig";
import IPage from "./IPage";

export default interface ICookPlayerConfig extends ICookConfig<ICookPlayerConfig> {
    page: IPage
}