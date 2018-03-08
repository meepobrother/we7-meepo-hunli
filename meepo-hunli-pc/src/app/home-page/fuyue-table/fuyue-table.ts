import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../shared/app.service';
@Component({
    selector: 'fuyue-table',
    templateUrl: './fuyue-table.html'
})
export class FuyueTable implements OnInit {
    data: any[] = [];
    constructor(
        public app: AppService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        let url = this.app.getWebUrl('getfuyue');
        this.http.get(url).subscribe((res: any) => {
            this.data = res;
        });
    }

    add() { }
}
