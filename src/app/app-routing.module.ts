import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

const routes: Routes = [
  {
    path:"home",component:HomePageComponent
  },
  {
    path:"fav",component:FavoritePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
