import ComponentMaker from "./ComponentMaker";
import ResourceMaker from "./ResourceMaker";
import AppMaker from './../built-in-resources/components/root-app/index';

type A = typeof ComponentMaker

class CookConfig {
    private makerList: A[] = []
    constructor() {
        this.makerList.push(AppMaker)
    }
    // TODO:.......
    install(maker: ResourceMaker) { }
    getMaker(makerName: string, makerPkg: string) {
        return this.makerList.find(e => {
            e.
        })
    }
}