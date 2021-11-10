import ICookEditorState from "@/types/ICookEditorState";

interface IPagePanelLink {
    pageUid: string,
    panelUid: string
}

const stateMap = new Map<ICookEditorState, IPagePanelLink[]>()

const getPanelLink = (cookEditorState: ICookEditorState, panelUid: string) => {
    const linkList = stateMap.get(cookEditorState) || []
    return linkList.find(e => e.panelUid === panelUid)
}
const setLink = (cookEditorState: ICookEditorState, link: IPagePanelLink) => {
    let linkList = stateMap.get(cookEditorState)
    if (!linkList) {
        linkList = []
        stateMap.set(cookEditorState, linkList)
    }
    linkList.push(link)
}

const getPageLink = (cookEditorState: ICookEditorState, pageUid: string) => {
    const linkList = stateMap.get(cookEditorState) || []
    return linkList.find(e => e.pageUid === pageUid)
}

const PagePanelLinker = {
    getPageUid: (cookEditorState: ICookEditorState, panelUid: string) => {
        const link = getPanelLink(cookEditorState, panelUid)
        return link?.pageUid
    },
    getPanelUid: (cookEditorState: ICookEditorState, pageUid: string) => {
        const link = getPageLink(cookEditorState, pageUid)
        return link?.pageUid
    },
    link: (cookEditorState: ICookEditorState, pageUid: string, panelUid: string,) => {
        const pageLink = getPageLink(cookEditorState, pageUid)
        if (pageLink) {
            pageLink.panelUid == panelUid
        }
        const panelLink = getPanelLink(cookEditorState, panelUid)
        if (panelLink) {
            panelLink.pageUid == pageUid
        }
        else {
            setLink(cookEditorState, {
                pageUid,
                panelUid
            })
        }
    },
}

export default PagePanelLinker