import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './Exam/students/students.component';
import { EmployersComponent } from './Exam/employers/employers.component';
import { DesignComponent } from './Exam/design/design.component';
import { SirComponent } from './sir/sir.component';
import { AlphaComponent } from './alpha/alpha.component';
import { APIComponent } from './api/api.component';
import { MyapiComponent } from './myapi/myapi.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'design', component: DesignComponent },
  { path: 'sir', component:SirComponent},
  { path: 'alpha', component:AlphaComponent},
  { path: 'api', component:APIComponent},
  { path: 'myapi', component:MyapiComponent}, 
  { path: 'crud', component:CrudComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
