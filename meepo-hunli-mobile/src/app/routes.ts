import { HomePage } from './home-page/home-page';

export const routes = [{
    path: 'home',
    component: HomePage,
    login: false
}, {
    path: 'index',
    component: HomePage,
    login: false
}];
export const components = [
    HomePage
];
