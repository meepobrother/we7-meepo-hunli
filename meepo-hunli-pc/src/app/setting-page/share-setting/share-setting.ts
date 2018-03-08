
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'share-setting',
    templateUrl: './share-setting.html',
    styleUrls: ['./share-setting.scss']
})
export class ShareSetting implements OnInit {
    @Input() form: FormGroup;
    action: string = '';
    @Input() avatarUrl: string;
    constructor(
        public app: AppService,
        public http: HttpClient
    ) { }

    ngOnInit() {
        this.action = this.app.getWebUrl('uploadimg');
        this.form.valueChanges.subscribe(res => {
            this.avatarUrl = res.icon;
        });
    }

    getFormControl(name) {
        return this.form.get(name);
    }

    handleChange(info: any) {
        const file = info.file;
        if (file.status === 'done') {
            this.form.get('icon').setValue(file.response.url);
            this.avatarUrl = file.response.url;
        }
    }
}
