import IPage from "./IPage";
import IResourceMaker from "./IResourceMaker";
import ISplitPaneConfig from "./ISplitPaneConfig";
import mitt, { Emitter } from 'mitt';

// TODO:全局的事件声明，，，，，
type Events = {
    a: "a",
    v: "a"
};

interface S extends Events { }

interface IEmi<T extends Record<any, any>> extends Emitter<T> { }

const emitter: IEmi<S> = mitt();
emitter.on("a", (a) => {

})

emitter.on("*", (a, s) => {

})

type ss = keyof S

emitter.on("*", (t, s) => {
    let sw: ss = ""
})

export default interface ICookEditorConfig {
    pages: IPage[],
    splines: ISplitPaneConfig[],
    makerList: IResourceMaker[],
    eventBus: Emitter<ICookEditorEventBusEvents>
}