import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DootComponent } from './pages/doot/doot.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: '/doot', component: DootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
