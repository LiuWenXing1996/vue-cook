import * as  makers from "@/lib/built-in-resources";
import IResourceMaker from "@/lib/types/IResourceMaker";

const defaultPreInstallMakerList: IResourceMaker[] = Object.entries(makers).map(e => e[1])

export default defaultPreInstallMakerList
