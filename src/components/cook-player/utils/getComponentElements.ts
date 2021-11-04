import { ComponentInternalInstance, VNode, isVNode, VNodeArrayChildren, Fragment } from "vue";
import isFragment from "./isFragment";

export default function getComponentElements(instance: ComponentInternalInstance) {
    let elements: Element[] = []
    if (isFragment(instance)) {
        elements = getFragmentElements(instance.subTree)
    } else {
        const vNode = instance.subTree;
        elements = getVNodeElement(vNode)
    }
    return elements
}

function getVNodeElement(vnode: VNode) {
    let elements: Element[] = []
    if (vnode.type === Fragment) {
        const _elements = getFragmentElements(vnode)
        elements.push(..._elements)
    } else if (vnode.component) {
        const _elements = getComponentElements(vnode.component)
        elements.push(..._elements)
    } else if (vnode.el) {
        const el = vnode.el
        if (el instanceof Element) {
            elements.push(el)
        }
    }
    return elements
}

function getFragmentElements(vNode: VNode) {
    const elements: Element[] = []
    if (!vNode.children) return elements
    if (Array.isArray(vNode.children)) {
        for (let i = 0, l = vNode.children.length; i < l; i++) {
            const childVnode = vNode.children[i]
            if (isVNode(childVnode)) {
                const _elements = getVNodeElement(childVnode)
                elements.push(..._elements)
            }
        }
    }
    // @ts-ignore
    if (!vNode.dynamicChildren) return elements
    // @ts-ignore
    const dynamicChildren = vNode.dynamicChildren as VNode[]
    if (Array.isArray(dynamicChildren)) {
        for (let i = 0, l = dynamicChildren.length; i < l; i++) {
            const childVnode = dynamicChildren[i]
            if (isVNode(childVnode)) {
                const _elements = getVNodeElement(childVnode)
                elements.push(..._elements)
            }
        }
    }
    return elements
}