import { NgModule } from '@angular/core'
import { AuthRoutingModule } from './auth-routing.module'
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared.module";
import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./auth.guard";

@NgModule({
	imports: [
		AuthRoutingModule,
		SharedModule
	],
	declarations: [
		AuthComponent,
		LoginComponent
	],
	providers: [AuthenticationGuard],
})
export class AuthModule {}
