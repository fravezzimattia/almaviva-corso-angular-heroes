import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ConnectableObservable, empty, from, generate, range, ReplaySubject, Subject } from 'rxjs';
import { iif, interval, of, zip } from 'rxjs';
import { combineLatest, concat, fromEvent, Observable, timer } from 'rxjs';
import { bufferTime, debounceTime, delay, distinctUntilChanged, every, filter, map, mergeMap, multicast, publish, share, startWith, take, tap, withLatestFrom } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'heroes';
	public message: any;

	ngOnInit(): void {
		// this.exampleObsCold();
		// this.exampleObsHot();
		// this.exampleMouseClick();
		// this.exampleCombineLatest();
		// this.exampleConcat();
		// this.exampleStartWith();
		// this.exampleWithLatestFrom();
		// this.exampleZip();
		// this.exampleEvery();
		// this.exampleIIF();
		// this.exampleEmpty();
		// this.exampleMulticasting()
		// this.exampleOf();
		// this.exampleFrom();
		// this.exampleGenerate();
		// this.exampleDebounceTime();
		// this.exampleUntilChanged();
		// this.exampleFilter();
		// this.exampleMap();
		// this.exampleBufferTime();
		// this.exampleTap();

		this.exampleSubject()
	}

	exampleSubject() {
		const subject = new Subject();
		subject
			.asObservable()
			.subscribe(res => console.log(res));
		subject.next('SUBJECT');

		const bSubject = new BehaviorSubject('BS');
		bSubject.asObservable()
			.subscribe(res => console.log(res));
		bSubject.next('BS 1');

		const rSubject = new ReplaySubject();
		var bs$ = rSubject.asObservable()
		bs$.subscribe(res => console.log(res));
		rSubject.next('RS 1');
		rSubject.next('RS 2');
		rSubject.next('RS 3');
		bs$.subscribe(res => console.log(res));

		const aSubject = new AsyncSubject();
		var bs$ = aSubject.asObservable()
		bs$.subscribe(res => console.log(res));
		aSubject.next('RS 1');
		aSubject.next('RS 2');
		aSubject.next('RS 3');
		bs$.subscribe(res => console.log(res));
		aSubject.complete();
	}

	exampleTap() {
		from([1, 2, 3])
			.pipe(tap(x => console.log("TAP", x)))
			.subscribe(res => console.log("S", res));
	}

	exampleBufferTime() {
		interval(500)
			.pipe(bufferTime(4000))
			.subscribe(res => console.log(res));
	}
	exampleMap() {
		from([1, 2, 3])
			.pipe(map(r => r * 10))
			.subscribe(res => console.log(res));
	}
	exampleFilter() {
		from([1, 2, 2, 2, 2, 3, 4, 3, 1, 2, 2, 2, 1])
			.pipe(filter(x => x > 2))
			.subscribe(res => console.log(res))
	}
	exampleUntilChanged() {
		from([1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 1])
			.pipe(distinctUntilChanged())
			.subscribe(res => console.log(res))
	}
	exampleDebounceTime() {
		fromEvent(document, 'click')
			.pipe(debounceTime(1000))
			.subscribe(res => console.log(res));
	}
	exampleOf() {
		of(['A', 'B', 'C'])
			.subscribe(res => console.log(res));
	}

	exampleFrom() {
		from([1, 2, 3])
			.subscribe(res => console.log(res));
	}
	exampleGenerate() {
		generate(
			0,
			x => x < 8,
			x => x + 1,
			x => '.'.repeat(x)
		)
			.subscribe(res => console.log(res));
	}
	exampleMulticasting() {
		const source = share()(range(0, 5));
		source.subscribe(res => console.log("SHARE 1", res));
		source.subscribe(res => console.log("SHARE 2", res));

		const sourceP = publish()(range(0, 5));
		sourceP.subscribe(res => console.log("PUBLISH 1", res));
		sourceP.subscribe(res => console.log("PUBLISH 2", res));
		sourceP.connect();

		const sourceM = range(0, 5).pipe(multicast(new Subject<number>()));
		sourceM.subscribe(res => console.log("MULTICAST 1", res));
		sourceM.subscribe(res => console.log("MULTICAST 2", res));
		(sourceM as ConnectableObservable<any>).connect();

		const sourceMS = range(0, 5).pipe(multicast(new BehaviorSubject<any>('INIZIO')));
		sourceMS.subscribe(res => console.log("MULTICAST 1", res));
		sourceMS.subscribe(res => console.log("MULTICAST 2", res));
		(sourceMS as ConnectableObservable<any>).connect();
	}

	exampleIIF() {
		const r = of('R');
		const x = of('X');
		interval(1000)
			.pipe(mergeMap((v: number) => iif(() => v % 4 === 0, r, x)))
			.subscribe(res => console.log(res))
	}
	exampleEmpty() {
		const r = of('R');
		const x = empty();
		interval(1000)
			.pipe(mergeMap((v: number) => iif(() => v < 5, r, x)))
			.subscribe(res => console.log(res))
	}
	exampleEvery() {
		of(0, 2, 4, 4, 6)
			.pipe(every(res => res % 2 === 0))
			.subscribe(res => console.log(res));

		of(0, 1, 2, 3, 4, 6)
			.pipe(every(res => res % 2 === 0))
			.subscribe(res => console.log(res));
	}

	exampleZip() {
		const source = interval(1000).pipe(take(5));
		const source1 = interval(2000).pipe(take(5));
		const source2 = interval(3000).pipe(take(5));
		zip(source, source1, source2)
			.subscribe(res => console.log(res));
	}

	exampleWithLatestFrom() {
		const source = interval(5000).pipe(take(5));
		const source2 = interval(1000);
		source.pipe(withLatestFrom(source2))
			.subscribe(res => console.log(res))
	}

	exampleStartWith() {
		const source = of(1, 2, 3);
		source.pipe(startWith('startwith'))
			.subscribe(x => console.log(x));
	}

	exampleConcat() {
		concat(
			of('Get Ready!'),
			of(3).pipe(delay(1000)),
			of(2).pipe(delay(1000)),
			of(1).pipe(delay(1000)),
			of('Go!').pipe(delay(1000)),
			of(null).pipe(delay(1000))
		)
			.subscribe((message: any) => {
				this.message = message;
			})
	}

	exampleCombineLatest() {
		const firstTimer = timer(0, 1000).pipe(take(5));
		const secondTimer = timer(500, 1000).pipe(take(5));
		combineLatest([firstTimer, secondTimer])
			.subscribe(res => console.log(res));
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
