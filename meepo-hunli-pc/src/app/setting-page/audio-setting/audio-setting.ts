import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'audio-setting',
    templateUrl: './audio-setting.html'
})

export class AudioSetting implements OnInit {
    _fileList: any[] = [];
    @Input()
    set fileList(res: any) {
        setTimeout(() => {
            this._fileList = res;
        }, 0);
    }
    get fileList() {
        return this._fileList;
    }
    @Input() form: FormArray;
    previewImage = '';
    previewVisible = false;
    action: string = '';

    nzRemove = (file: any) => {
        let url = this.app.getWebUrl('fileremove');
        // 移除
        let index = -1;
        this.fileList.map((res, index) => {
            if (res.uid === file.uid) {
                index = index;
            }
        });
        if (index > -1) {
            this.form.removeAt(index);
        }
        return this.http.post(url, file);
    }
    constructor(
        public app: AppService,
        public http: HttpClient
    ) { }

    handlePreview = (file: any) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }
    ngOnInit() {
        this.action = this.app.getWebUrl('uploadaudio');
    }

    nzChange(item: any) {
        const file = item.file;
        if (file.status === 'done') {
            if (file.response && file.response.url) {
                this.form.push(new FormControl(file.response.url));
            }
        } else if (file.status === 'removed') {
            let index2 = -1;
            let fileUrl = file.url || file.response.url;
            this.fileList.map((res, index) => {
                let resUrl = res.url || res.response.url;
                if ('' + fileUrl == '' + resUrl) {
                    index2 = index;
                }
            });
            if (index2 > -1) {
                let url = this.app.getWebUrl('fileremove');
                this.http.post(url, file).subscribe(res => {
                    console.log(res);
                    this.form.removeAt(index2);
                });
            }
        }
    }
}
