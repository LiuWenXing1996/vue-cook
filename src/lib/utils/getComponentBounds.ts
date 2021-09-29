import { ComponentInternalInstance, VNode, Fragment } from "vue"

export interface Rect {
    top: number,
    bottom: number,
    left: number,
    right: number,
    width: number,
    height: number
}

export function getInstanceOrVnodeRect(instance: ComponentInternalInstance): any {
    const el = instance.subTree.el
    if (isFragment(instance)) {
        return getFragmentRect(instance.subTree)
    } else if (el?.nodeType === 1) {
        return el?.getBoundingClientRect()
    }
}

function createRect() {
    const rect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        get width() { return rect.right - rect.left },
        get height() { return rect.bottom - rect.top }
    }
    return rect
}

function mergeRects(a: Rect, b: Rect) {
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

let range: Range;
function getTextRect(node: Node) {
    if (!range) range = document.createRange()
    range.selectNode(node)
    return range.getBoundingClientRect()
}



function getFragmentRect(vnode: VNode) {
    const rect = createRect()
    if (!vnode.children) return rect
    //@ts-ignore
    for (let i = 0, l = vnode.children.length; i < l; i++) {
        //@ts-ignore
        const childVnode = vnode.children[i]
        let childRect
        if (childVnode.component) {
            childRect = getInstanceOrVnodeRect(childVnode.component)
        } else if (childVnode.el) {
            const el = childVnode.el
            if (el.nodeType === 1 || el.getBoundingClientRect) {
                childRect = el.getBoundingClientRect()
            } else if (el.nodeType === 3 && el.data.trim()) {
                childRect = getTextRect(el)
            }
        }
        if (childRect) {
            mergeRects(rect, childRect)
        }
    }

    return rect
}


export function isFragment(instance: ComponentInternalInstance) {
    return instance.subTree.type === Fragment
}