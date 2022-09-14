import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MeasuresComponent } from './components/measures/measures.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatCardModule
} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeasuresFormComponent } from './components/measures-form/measures-form.component';
import { AppService } from './app.service';
import { TableComponent } from './components/table/table.component';
import { LineDiagramComponent } from './components/line-diagram/line-diagram.component';
import { NgChartsModule } from "ng2-charts";
import { LoginComponent } from './components/login/login.component';
import { DecideScaleComponent } from './components/decide-scale/decide-scale.component';
@NgModule({
  declarations: [
    AppComponent,
    MeasuresComponent,
    MeasuresFormComponent,
    TableComponent,
    LineDiagramComponent,
    LoginComponent,
    DecideScaleComponent,
  ],
  imports: [
    NgChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule, MatStepperModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
