import IResourceMaker from '@/lib/types/IResourceMaker';
import ICookConfig from '../types/ICookConfig';
export default function installResourceMaker(cookConfig: ICookConfig, maker: IResourceMaker, options?: any) {
    maker.install(cookConfig, options)
    // TODO:maker必须经过安装
}