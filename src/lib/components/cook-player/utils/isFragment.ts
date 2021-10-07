import { ComponentInternalInstance, Fragment } from "vue";

export default function isFragment(instance: ComponentInternalInstance) {
    return instance.subTree.type === Fragment
}