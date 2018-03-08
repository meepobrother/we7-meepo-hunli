import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/app.service';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'setting-page',
    templateUrl: './setting-page.html',
    styleUrls: ['./setting-page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SettingPage implements OnInit {
    form: FormGroup;
    tabs: any[] = [{
        name: '系统设置',
        content: 'system'
    }, {
        name: '分享设置',
        content: 'share'
    }, {
        name: '活动设置',
        content: 'active'
    }, {
        name: '图片设置',
        content: 'image'
    }, {
        name: '背景音乐',
        content: 'audio'
    }];

    imagesList: any[] = [];
    audiosList: any[] = [];

    constructor(
        public fb: FormBuilder,
        public http: HttpClient,
        public app: AppService
    ) {
        this.form = this.fb.group({
            title: [''],
            adv: [''],
            share: this.fb.group({
                title: [''],
                desc: [''],
                icon: ['']
            }),
            active: this.fb.group({
                address: [''],
                mobile: [''],
                time: ['']
            }),
            images: this.fb.array([]),
            audios: this.fb.array([])
        });
    }
    ngOnInit() {
        let url = this.app.getWebUrl('getsetting');
        this.http.get(url).subscribe((res: any) => {
            if (res && res.id) {
                let settings = res.value;
                this.form.get('title').setValue(settings.title);
                this.form.get('adv').setValue(settings.adv);
                settings.audios.map(audio => {
                    (<FormArray>this.form.get('audios')).push(new FormControl(audio));
                    this.audiosList.push({
                        url: audio,
                        thumbUrl: audio,
                        uid: audio,
                        name: audio,
                        status: 'done'
                    });
                });
                settings.images.map(image => {
                    (<FormArray>this.form.get('images')).push(new FormControl(image));
                    this.imagesList.push({
                        url: image,
                        thumbUrl: image,
                        uid: image,
                        name: '图片',
                        status: 'done'
                    });
                });
                this.form.get('active').setValue(settings.active);
                this.form.get('share').setValue(settings.share);
            }
            this.updateChange();
        });
    }

    updateChange() {
        this.form.valueChanges.debounceTime(300).subscribe(res => {
            let url = this.app.getWebUrl('savesetting');
            this.http.post(url, this.form.value).subscribe(res => {
                console.log(res);
            });
        });
    }
}
