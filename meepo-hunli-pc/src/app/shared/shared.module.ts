import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer';
import { NumInput } from './num-input/num-input';
import { We7ImgDirective } from './we7-img/we7-img';
import { AppService } from './app.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        FooterComponent,
        We7ImgDirective,
        ReactiveFormsModule,
        FormsModule,
        NumInput
    ],
    declarations: [
        FooterComponent,
        We7ImgDirective,
        NumInput
    ],
    providers: [
        AppService
    ]
})
export class SharedModule { }
