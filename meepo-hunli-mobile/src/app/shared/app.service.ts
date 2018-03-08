import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { We7RouterService } from 'meepo-we7-router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class AppService {
    props: any;
    version: string = '1.0.4';
    form: FormGroup;
    userinfo: any;
    constructor(
        public http: HttpClient,
        public router: We7RouterService,
        public location: Location,
        public fb: FormBuilder
    ) {
        
    }

    guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    initForm() {

    }

    refreshForm() {

    }

    back() {
        this.location.back();
    }

    autoLogin() {
        let url = this.getMobileUrl('checklogin');
        this.http.get(url).subscribe((res: any) => {
            this.userinfo = res.info;
        });
    }

    getUrl(_do: string, params?: any) {
        let url = '';
        if (isDevMode()) {
            url = `./assets/${_do}.json?t=` + new Date().getTime();
        } else {
            url = this.router.puts({
                do: _do,
                ...params
            });
        }
        return url;
    }

    getMobileUrl(_do: string, params?: any) {
        let url = this.getUrl(_do, params);
        if (isDevMode()) {
            return url;
        }
        return `${location.protocol}//${location.host}/app/index.php${url}`
    }

    getWebUrl(_do: string, params?: any) {
        let url = this.getUrl(_do, params);
        if (isDevMode()) {
            return url;
        }
        return `${location.protocol}//${location.host}/web/index.php${url}`
    }

    toRegister() {
        this.router.go('register', {});
    }

    toForget() {
        this.router.go('forget', {});
    }

    toLogin() {
        this.router.go('login', {});
    }

    loginSuccess(item: any) {
        const _do = localStorage.getItem('login.success');
        sessionStorage.setItem('uid', item.id);
        if (_do) {
            this.router.go(_do, { uid: item.id });
        } else {
            this.router.go('index', { uid: item.id });
        }
    }

    tip(msg: string) {
        alert(msg);
    }
}