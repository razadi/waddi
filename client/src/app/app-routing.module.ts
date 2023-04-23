import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./system/system.module').then(m => m.SystemModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule), canActivate: [AuthGuard] },
  { path: 'nofound', loadChildren: () => import('./nofound/nofound.module').then(m => m.NofoundModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},  
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
