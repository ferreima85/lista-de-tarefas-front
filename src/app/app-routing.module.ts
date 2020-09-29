import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './service/route-guard.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component'
import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'listaAtividades', component: ListaAtividadesComponent, canActivate:[RouteGuardService]},
  {path: 'atividades/:id', component: AtividadesComponent, canActivate:[RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
