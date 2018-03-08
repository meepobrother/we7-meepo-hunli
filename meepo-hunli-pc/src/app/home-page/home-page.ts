import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
    list: any[] = [];
    tabs: any[] = [{
        name: '留言管理',
        content: 'discuss'
    }, {
        name: '赴约管理',
        content: 'fuyue'
    }];
    constructor(
        public http: HttpClient,
        public app: AppService
    ) { }

    ngOnInit() {
        let url = this.app.getWebUrl('getfuyue');
        this.http.get(url).subscribe((res: any) => {
            this.list = res;
        });
    }
}
