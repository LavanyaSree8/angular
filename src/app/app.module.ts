import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PipesPipe } from './pipes.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ArrayComponent } from './array/array.component';
import { CustomComponent } from './custom/custom.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { DbComponent } from './db/db.component';
import { HttpClientModule } from '@angular/common/http';
import { OperatorsComponent } from './operators/operators.component';
import { IntegrationComponent } from './integration/integration.component';
import { freeApiService } from './services/freeapi.service';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServerComponent,
    ServersComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    PipesPipe,
    FormComponent,
    ArrayComponent,
    CustomComponent,
    TableComponent,
    RegisterComponent,
    PasswordComponent,
    TodoComponent,
    TodolistComponent,
    DbComponent,
    OperatorsComponent,
    IntegrationComponent,
    PopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [TodoService,freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

