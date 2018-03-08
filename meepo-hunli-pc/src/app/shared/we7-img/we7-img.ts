import { Directive, Input, isDevMode, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[we7Img]' })
export class We7ImgDirective implements OnInit {
    _src: string;
    @Input()
    set we7Img(val: string) {
        if (!isDevMode()) {
            this._src = `../addons/shibida_mshoper/template/mobile/${val}`;
        }else{
            this._src = val;
        }
        this.render.setAttribute(this.ele.nativeElement, 'src', this._src);
    };
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() { }
}