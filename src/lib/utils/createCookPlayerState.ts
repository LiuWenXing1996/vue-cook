import ICookPlayerState from '@/lib/types/ICookPlayerState';
import { reactive } from 'vue';
import IPage from '../types/IPage';
import IResourceMaker from '../types/IResourceMaker';
import defaultPreInstallMakerList from './defaultPreInstallMakerList';

type ICookPlayerStateOptions = Partial<Omit<ICookPlayerState, "install" | "getMakerList" | "page">> & {
    preInstallMakerList?: IResourceMaker[],
    page: IPage
}

export default function createCookPlayerState(config: ICookPlayerStateOptions) {
    const makerList: IResourceMaker[] = [];
    const _config: ICookPlayerState = {
        install: (maker) => {
            if (makerList.find(e => e.name === maker.name && e.pkg === maker.pkg && e.type === maker.type)) {
                return reactive(_config)
            }
            makerList.push(maker)
            maker.install?.(reactive(_config))
            return reactive(_config)
        },
        getMakerList: () => {
            return [...makerList]
        },
        page: config.page,
        extra: config.extra || {}
    }
    // TODO：安装默认maker
    const _defaultPreInstallMakerList = config.preInstallMakerList || defaultPreInstallMakerList
    _defaultPreInstallMakerList.map(e => _config.install(e))

    return reactive(_config);
}