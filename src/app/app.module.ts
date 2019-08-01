import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Exam/students/students.component';
import { EmployersComponent } from './Exam/employers/employers.component';
import { DesignComponent } from './Exam/design/design.component';
import { SirComponent } from './sir/sir.component';
import { AlphaComponent } from './alpha/alpha.component';
import { HttpModule } from '@angular/http';
import { APIComponent } from './api/api.component';
import { MyapiComponent } from './myapi/myapi.component';
import { CrudComponent } from './crud/crud.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EmployersComponent,
    DesignComponent,
    SirComponent,
    AlphaComponent,
    APIComponent,
    MyapiComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
