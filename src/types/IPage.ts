import IComponentConfig from './IComponentConfig';
export default interface IPage {
    path: string,
    name: string,
    uid: string,
    component: IComponentConfig
}