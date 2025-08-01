import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'add-memory',
    loadChildren: () => import('./add-memory/add-memory.module').then(m => m.AddMemoryPageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}