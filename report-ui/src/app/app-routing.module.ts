import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DualaxesComponent } from './graphs/dualaxes/dualaxes.component';


const routes: Routes = [{ 
  path: '', component: DefaultComponent,
  children:[{ path:'', component: DashboardComponent},
  {  path:'dual', component: DualaxesComponent},
  ]
}];

//children:[
//    { path:'dash', component: DashboardComponent, children:[
//     { path: 'pie', component: PiechartComponent},
//   ]}

  //{ path: 'pie', component: PiechartComponent} 
  //{ path: 'app', component: MainComponent },
  //{ path: '', redirectTo: '/app', pathMatch: 'full' }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
