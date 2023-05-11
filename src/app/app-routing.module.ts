import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'' , pathMatch: 'full' , component:ServersComponent },
  {path:'home-pages' , pathMatch: 'full' , component:HomePageComponent },
  {path:'server' , pathMatch: 'full' , component:ServerComponent},
  {path:'server' , pathMatch: 'full' , component:ServerComponent},
  {path:'header',pathMatch: 'full' , component:HeaderComponent},
  {path:'footer' , pathMatch: 'full' , component:FooterComponent},
  {path:'task',pathMatch:'full',component:TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
