import IComponentConfig from '@/types/IComponentConfig';
export default interface IPage {
    path: string,
    name: string,
    uid: string,
    component: IComponentConfig
}