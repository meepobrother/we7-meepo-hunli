import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../shared/app.service';
@Component({
    selector: 'discuss-table',
    templateUrl: './discuss-table.html'
})
export class DiscussTable implements OnInit {
    data: any[] = [];
    constructor(
        public app: AppService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        let url = this.app.getWebUrl('getdiscuss');
        this.http.get(url).subscribe((res: any) => {
            this.data = res;
        });
    }

    add() { }
}
