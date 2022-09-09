import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasuresComponent } from './components/measures/measures.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [{path:'', component: MeasuresComponent},
{path:'dashboard', component:TableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
