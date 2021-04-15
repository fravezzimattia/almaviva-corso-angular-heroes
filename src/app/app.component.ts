import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'heroes';

	ngOnInit(): void {
		this.exampleObsCold();
		this.exampleObsHot();
		this.exampleMouseClick();
	}

	private exampleMouseClick() {
		const source = fromEvent(document, 'click');
		
		source.subscribe((res: Event) => {
			const pointer = <PointerEvent>res;
			console.log(pointer.clientX, pointer.clientY);
		});


		source.subscribe((res: Event) => {
			const pointer = <PointerEvent>res;
			console.log(pointer.clientX, pointer.clientY);
		});

		source.subscribe((res: Event) => {
			const pointer = <PointerEvent>res;
			console.log(pointer.clientX, pointer.clientY);
		});
	}

	private exampleObsHot() {
		console.log("exampleObsHot")
		const value = Math.random();

		const observable$ = new Observable((observer: any) => {
			console.log("observable$ HOT");
			observer.next(value);
		})

		observable$.subscribe(res => {
			console.log(res);
		})

		observable$.subscribe(res => {
			console.log(res);
		})
	}

	private exampleObsCold() {
		console.log("exampleObsCold");
		const observable$ = new Observable((observer: any) => {
			console.log("observable$");
			observer.next(Math.random());
		});

		observable$.subscribe(res => {
			console.log(res);
		})

		observable$.subscribe(res => {
			console.log(res);
		})
	}
}
