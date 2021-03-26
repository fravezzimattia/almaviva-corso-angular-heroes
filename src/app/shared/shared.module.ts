import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { materialModule } from './material.module';

@NgModule({
	declarations: [
		AlertComponent
	],
	imports: [
		CommonModule,
		...materialModule
	],
	exports: [
		AlertComponent,
		...materialModule
	]
})
export class SharedModule { }
