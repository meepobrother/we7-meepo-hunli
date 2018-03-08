import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { We7RouterService } from 'meepo-we7-router';

@Component({
    selector: 'footer',
    templateUrl: 'footer.html',
    styleUrls: ['./footer.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    @Input() props: any[] = [];
    @Output() onItem: EventEmitter<any> = new EventEmitter();
    do: string = '';
    constructor(
        public router: We7RouterService
    ) { }
    ngOnInit() { 
        this.do = this.router.get('do');
    }
    _onItem(item: any) {
        this.props.map(item => {
            item.on = false;
        });
        item.on = true;
        this.onItem.emit(item);
        this.router.go(item.do, item.params);
    }
}
