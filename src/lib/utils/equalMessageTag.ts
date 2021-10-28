import { getUniqTag, IMessageTag } from "./createMessageBus";

export default function equalMessageTag(tag1: IMessageTag, tag2: IMessageTag) {
    return getUniqTag(tag1) === getUniqTag(tag2)
}