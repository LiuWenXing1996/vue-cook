import ILogicMaker from "@/lib/types/ILogicMaker";

type ILogicMakerOptions = Omit<ILogicMaker, "type">

export default function defineLogicMaker(maker: ILogicMakerOptions): ILogicMaker {
    const _maker: ILogicMaker = {
        type: "logic",
        ...maker
    }
    return _maker
}