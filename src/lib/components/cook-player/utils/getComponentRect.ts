import { ComponentInternalInstance, VNode, isVNode, VNodeArrayChildren } from "vue";
import isFragment from "./isFragment";

export interface IComponentRect {
    top: number,
    bottom: number,
    left: number,
    right: number,
    width: number,
    height: number
}

function createEmptyRect() {
    const rect: IComponentRect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        get width() { return rect.right - rect.left },
        get height() { return rect.bottom - rect.top }
    }
    return rect
}

export default function getComponentRect(instance: ComponentInternalInstance) {
    let rect = createEmptyRect();
    if (isFragment(instance)) {
        rect = getFragmentRect(instance.subTree)
    } else {
        const vNode = instance.subTree;
        rect = getVNodeRect(vNode)
    }
    return rect
}

function getVNodeRect(vnode: VNode) {
    let rect = createEmptyRect();
    if (vnode.component) {
        rect = getComponentRect(vnode.component)
    } else if (vnode.el) {
        const el = vnode.el
        if (el.nodeType === 1 || el.getBoundingClientRect) {
            rect = el.getBoundingClientRect()
        } else if (el.nodeType === 3 && el.data.trim()) {
            rect = getTextRect(el as Node)
        }
    }
    return rect
}

function getVNodeArrayRect(vNodeArray: VNodeArrayChildren) {
    let rect = createEmptyRect();
    for (let i = 0, l = vNodeArray.length; i < l; i++) {
        const childVnode = vNodeArray[i]
        if (isVNode(childVnode)) {
            const childRect = getVNodeRect(childVnode)
            mergeRects(rect, childRect)
        } else if (Array.isArray(childVnode)) {
            const childRect = getVNodeArrayRect(childVnode)
            mergeRects(rect, childRect)
        }
    }
    return rect
}

let range: Range;
function getTextRect(node: Node) {
    if (!range) range = document.createRange()
    range.selectNode(node)
    return range.getBoundingClientRect()
}

function getFragmentRect(vNode: VNode) {
    let rect = createEmptyRect();
    if (!vNode.children) return rect
    if (Array.isArray(vNode.children)) {
        rect = getVNodeArrayRect(vNode.children)
    }
    return rect
}

function mergeRects(a: IComponentRect, b: IComponentRect) {
    if (!a.top || b.top < a.top) {
        a.top = b.top
    }
    if (!a.bottom || b.bottom > a.bottom) {
        a.bottom = b.bottom
    }
    if (!a.left || b.left < a.left) {
        a.left = b.left
    }
    if (!a.right || b.right > a.right) {
        a.right = b.right
    }
    return a
}