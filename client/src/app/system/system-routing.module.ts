import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
  { 
    path: '', 
    component: SystemComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'users', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
      { path: 'bitacora', loadChildren: () => import('./bitacora/bitacora.module').then(m => m.BitacoraModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
