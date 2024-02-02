import { NgModule } from '@angular/core'
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeGuard} from "./home.guard";

@NgModule({
	imports: [
		HomeRoutingModule,
		SharedModule
	],
	declarations: [
		HomeComponent,
	],
	providers: [HomeGuard]
})
export class HomeModule {}
