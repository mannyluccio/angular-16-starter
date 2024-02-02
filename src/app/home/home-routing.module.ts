import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from "./home.component";
import {HomeGuard} from "./home.guard";

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [HomeGuard],
		children: []
	}
]

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forChild(routes)],
	declarations: []
})
export class HomeRoutingModule {}
