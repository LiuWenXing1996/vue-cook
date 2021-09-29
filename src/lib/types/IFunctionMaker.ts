import IFuctionConfig from './IFuctionConfig';
import IResourceMaker from './IResourceMaker';

export default interface IFunctionMaker extends IResourceMaker<IFuctionConfig> {
    name: string,
    label: string,
    makeFunction: (config: IFuctionConfig) => Function
}