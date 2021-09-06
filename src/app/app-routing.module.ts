import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//matriz de rutas
const routes: Routes = [
  //cargamos el componente del panel de material home dashboard que se genero
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiensoy', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

