import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from "./views/pages/dashbord/dashbord.component";
import {HomeComponent} from "./views/pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashbordComponent, data: {title: 'Administrador'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
