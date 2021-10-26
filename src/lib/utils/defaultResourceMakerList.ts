import * as  makers from "$/built-in-resources";
import IResourceMaker from "$/types/IResourceMaker";

const defaultResourceMakerList: IResourceMaker[] = Object.entries(makers).map(e => e[1])

export default defaultResourceMakerList