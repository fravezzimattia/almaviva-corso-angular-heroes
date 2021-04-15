import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
	protected unsubscribeAll: Subject<any> = new Subject();

	ngOnInit(): void {
		this.unsubscribeAll = new Subject();
	}

	ngOnDestroy(): void {
		this.unsubscribeAll.next();
		this.unsubscribeAll.complete();
	}
}
