import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [ { path: '', component: ChildComponent },
  { path: 'data', component: DataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
