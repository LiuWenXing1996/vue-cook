import IResourceConfig from './IResourceConfig';
export default interface IFuctionConfig extends IResourceConfig {
    data?: {
        args?: Record<string, string>,
        [key: string]: any
    }
}