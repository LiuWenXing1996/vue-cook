import IPage from '@/lib/types/IPage';
import IResourceMaker from '@/lib/types/IResourceMaker';
export default interface IPlayerConfig {
    page: IPage,
    makerList: IResourceMaker[]
}