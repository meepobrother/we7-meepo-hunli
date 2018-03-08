import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'num-input',
    templateUrl: `./num-input.html`,
    styleUrls: ['./num-input.html']
})
export class NumInput implements OnInit {
    @Input() num: number = 0;
    @Output() numChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() { }

    add(){
        this.num ++;
        this.numChange.emit(this.num);
    }

    del(){
        this.num --;
        this.numChange.emit(this.num);
    }
}
