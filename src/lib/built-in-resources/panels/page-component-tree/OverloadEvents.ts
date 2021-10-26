export const Click_Event_Tag = `vue-cook:page-component-tree-click`


type OverloadEvents = {
    [Click_Event_Tag]: string
}
declare global {
    interface ICookEditorEventBusEvents extends OverloadEvents { }
}
