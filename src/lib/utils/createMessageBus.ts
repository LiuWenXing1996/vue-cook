export interface IMessageTag {
    makerName: string,
    makerpkg: string,
    type: string
}
export type IMessageHandler = (tag: IMessageTag, message: unknown) => void

export interface IMessageBus {
    reciveMessage: (tag: IMessageTag, handler: IMessageHandler) => void
    sendMessage: (tag: IMessageTag, message: unknown) => void
}

export function getUniqTag(tag: IMessageTag) {
    return `${tag.makerpkg}-${tag.makerName}-${tag.type}`
}

export default function createMessageBus(): IMessageBus {
    const obs: Record<string, IMessageHandler[]> = {}
    return {
        reciveMessage(tag, handler) {
            const uTag = getUniqTag(tag)
            obs[uTag] = obs[uTag] || []
            obs[uTag].push(handler)
        },
        sendMessage(tag, message) {
            const uTag = getUniqTag(tag)
            const handlerList = obs[uTag]
            handlerList.forEach(e => e(tag, message))
        }
    }
}