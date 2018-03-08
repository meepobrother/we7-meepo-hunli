import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'image-setting',
    templateUrl: './image-setting.html'
})
export class ImageSetting implements OnInit {

    _fileList: any[] = [];
    @Input()
    set fileList(res: any[]) {
        setTimeout(() => {
            this._fileList = res;
        }, 0);
    }
    get fileList(): any[] {
        return this._fileList;
    }
    previewImage = '';
    previewVisible = false;
    action: string = '';

    @Input() form: FormArray;

    nzCustomRequest = (item: any) => {
        console.log(item);
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
        this.action = this.app.getWebUrl('uploadimg');
    }

    nzChange(item: any) {
        const file = item.file;
        console.log(file.status);
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
