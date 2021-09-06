export default interface ICompositionConfig {
    uid: string,
    maker: string,
    data?: {
        args?: Record<string, string>,
        [key: string]: any
    }
}