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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeasuresFormComponent } from './components/measures-form/measures-form.component';
import { AppService } from './app.service';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    MeasuresComponent,
    MeasuresFormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule, MatStepperModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
