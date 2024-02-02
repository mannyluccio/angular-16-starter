import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		TranslateModule
	],
	declarations: [
	],
	exports: [
		TranslateModule
	]
})
export class SharedModule {}
