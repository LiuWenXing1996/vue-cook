import IComponentMaker from "./IComponentMaker"
import ILogicMaker from "./ILogicMaker"
import IPanelMaker from "./IPanelMaker"

type IResourceMaker = IComponentMaker | ILogicMaker | IPanelMaker

export default IResourceMaker