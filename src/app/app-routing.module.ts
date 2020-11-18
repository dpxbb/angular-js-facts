import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { CreatorComponent } from './creator/creator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MapHigherComponent } from './map-higher/map-higher.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: 'promises',
    component: PromisesComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'creator',
    component: CreatorComponent
  },
  {
    path: 'map-higher',
    component: MapHigherComponent
  }, 
  {
    path: 'main',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
