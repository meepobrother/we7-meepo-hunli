import { HomePage } from './home-page/home-page';
import { SettingPage } from './setting-page/setting-page';

export const routes = [{
    path: 'home',
    component: HomePage,
    login: false
}, {
    path: 'index',
    component: HomePage,
    login: false
}, {
    path: 'setting',
    component: SettingPage,
    login: false
}];

import { SystemSetting } from './setting-page/system-setting/system-setting';
import { ShareSetting } from './setting-page/share-setting/share-setting';
import { ActiveSetting } from './setting-page/active-setting/active-setting';
import { ImageSetting } from './setting-page/image-setting/image-setting';
import { AudioSetting } from './setting-page/audio-setting/audio-setting';

import { DiscussTable } from './home-page/discuss-table/discuss-table';
import { FuyueTable } from './home-page/fuyue-table/fuyue-table';

export const components = [
    HomePage,
    SettingPage,
    SystemSetting,
    ShareSetting,
    ActiveSetting,
    ImageSetting,
    AudioSetting,
    DiscussTable,
    FuyueTable
];
