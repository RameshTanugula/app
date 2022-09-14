import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecideScaleComponent } from './components/decide-scale/decide-scale.component';
import { LineDiagramComponent } from './components/line-diagram/line-diagram.component';
import { LoginComponent } from './components/login/login.component';
import { MeasuresComponent } from './components/measures/measures.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [{path:'', component:LoginComponent},
{path:'decide-scale', component:DecideScaleComponent},
{path:'select-measures', component: MeasuresComponent},
{path:'dashboard', component:TableComponent},
{path:'line-diagram', component:LineDiagramComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
