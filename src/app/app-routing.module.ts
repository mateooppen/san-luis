import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'parcela',
    loadChildren: () => import('./pages/parcela/parcela.module').then( m => m.ParcelaPageModule)
  },
  {
    path: 'lista-parcelas',
    loadChildren: () => import('./pages/lista-parcelas/lista-parcelas.module').then( m => m.ListaParcelasPageModule)
  },
  {
    path: 'modulo-pastoreo',
    loadChildren: () => import('./pages/modulo-pastoreo/modulo-pastoreo.module').then( m => m.ModuloPastoreoPageModule)
  },
  {
    path: 'lista-modulos-pastoreo',
    loadChildren: () => import('./pages/lista-modulos-pastoreo/lista-modulos-pastoreo.module').then( m => m.ListaModulosPastoreoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
