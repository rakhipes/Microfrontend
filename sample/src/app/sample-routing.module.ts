import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplittingComponent } from './splitting/splitting.component';

const routes: Routes = [{path:'splitting', component:SplittingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
