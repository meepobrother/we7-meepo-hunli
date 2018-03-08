
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'active-setting',
    templateUrl: './active-setting.html'
})
export class ActiveSetting implements OnInit {
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() { }

    getFormControl(name) {
        return this.form.get(name);
    }
}
