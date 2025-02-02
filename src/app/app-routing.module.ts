import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "movies", loadChildren: ()=> import('./movies/movies.module').then(m => m.MoviesModule) },
  { path: "signup", loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
  { path: "**", redirectTo: "movies", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
