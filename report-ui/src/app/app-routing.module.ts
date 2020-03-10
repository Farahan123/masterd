import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{ 
  path: '', component: DefaultComponent,
  children:[{ path:'', component: DashboardComponent},{    
  path:'posts', component: PostsComponent
  }]
}];
//   { path: 'test', component: TestComponent },
//   { path: 'app', component: MainComponent },
//   { path: '', redirectTo: '/app', pathMatch: 'full' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
