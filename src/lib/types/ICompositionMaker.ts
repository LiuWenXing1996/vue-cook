import ICompositionConfig from './ICompositionConfig';

interface ICompositionParam {
    tips?: string,
    label?: string,
    type?: string
}

export default interface ICompositionMaker {
    name: string,
    label: string,
    args: (config: ICompositionConfig) => Record<string, ICompositionParam>,
    result: (config: ICompositionConfig) => ICompositionParam,
    body: (config: ICompositionConfig) => Function
}