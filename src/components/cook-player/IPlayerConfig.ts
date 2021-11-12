import IPage from '@/types/IPage';
import IResourceMakerBase from '@/types/IResourceMakerBase';
export default interface IPlayerConfig {
    page: IPage,
    makerList: IResourceMakerBase[]
}