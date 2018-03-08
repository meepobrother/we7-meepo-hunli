
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'system-setting',
    templateUrl: './system-setting.html'
})
export class SystemSetting implements OnInit {
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() {
        
    }

    getFormControl(name) {
        return this.form.get(name);
    }
}
