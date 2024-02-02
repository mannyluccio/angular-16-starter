import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./auth.guard";

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		canActivate: [AuthenticationGuard],
		children: [
			{path: '', redirectTo: 'login', pathMatch: 'full'},
			{
				path: 'login',
				component: LoginComponent,
			},
		],
	},
]

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
	declarations: []
})
export class AuthRoutingModule {}
