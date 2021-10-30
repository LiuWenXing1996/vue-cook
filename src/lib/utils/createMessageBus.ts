import ICookState from "../types/ICookState"

declare global {
    interface IVueCookMessageBusEventMap {
    }
}

export interface IMessageBus<T extends ICookState = ICookState> {
    reciveMessage<key extends keyof IVueCookMessageBusEventMap>(type: key, handler: (type: key, message: IVueCookMessageBusEventMap[key], cookConfig: T) => void): void
    sendMessage<key extends keyof IVueCookMessageBusEventMap>(type: key, message: IVueCookMessageBusEventMap[key]): void
}


export default function createMessageBus<T extends ICookState = ICookState>(cookConfig: T): IMessageBus<T> {
    const obs: Record<string, Function[]> = {}
    return {
        reciveMessage(type, handler) {
            obs[type] = obs[type] || []
            obs[type].push(handler)
        },
        sendMessage(type, message) {
            const handlerList = obs[type] || []
            handlerList.forEach(e => e(type, message, cookConfig))
        }
    }
}