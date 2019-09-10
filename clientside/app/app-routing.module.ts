import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/component/login/login.component';
import { DashboardComponent } from 'src/app/component/dashboard/dashboard.component';
import { FormComponent } from 'src/app/component/form/form.component';
import { UpdateComponent } from './component/update/update.component';
import { GraphComponent } from './component/graph/graph.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent},
   { path: 'login', component: LoginComponent },
   {path: 'form', component: FormComponent },
   { path: 'update', component:  UpdateComponent },
   { path: 'graph', component: GraphComponent  },
   {path: 'admin', component: AdminComponent}
 
];

// const routes: Routes =[
//   {path:'',redirectTo:'/test',pathMatch:'full'},
//   { path: 'test', component: FormUploadComponent}
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
