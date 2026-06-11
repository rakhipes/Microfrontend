import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleLoginComponent } from './samplelogin/samplelogin.component';

const routes: Routes = [{path:'samplelogin', component:SampleLoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
