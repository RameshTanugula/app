import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {
  @ViewChild('stepper')
  stepper!: MatStepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  steps: any = [];
  constructor(private _formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router) {


  }
  selectedIndex: any = 0;
  gridData: any = [];
  processing = true;
  ngOnInit(): void {

    this.selectedIndex = window.localStorage.getItem("selectedIndex");
    window.localStorage.removeItem("selectedIndex");
    this.getMeasures();
  }
  
  getMeasures() {
    this.appService.getMeasures().subscribe(data => {
      this.processing = false;
      this.gridData = data?.res[0];
      this.steps = data?.res[1];
      for (let i = 0; i < this.steps.length; i++) {
        if (this.selectedIndex) {
          this.steps[i]['data'] = JSON.parse(this.steps[i]['json_data']);
        } else {
          this.steps[i]['data'] = JSON.parse(this.steps[i]['json_data']).map((obj: any) => {
            obj.isSelected = false;
            return obj;
          })
        }
      }
    })
  }
  selectionChange(event: any) {

  }
  complete() {
    // this.stepper.selectedIndex = 3;
  }
  onSubmit() {
    let sumArray: any = [];
    for (let i = 0; i < this.steps.length; i++) {
      let count = 0;
      this.steps[i].data.forEach((obj: any, j: number) => {
        if (obj.isSelected) {
          count = count + obj.value;
        }
      })
      sumArray.push(count);
      count = 0;
    }
    if (sumArray?.length > 0) {
      this.appService.saveMeasures({ sumArray: sumArray, steps: this.steps }).subscribe((data) => {
        if (data) {
          this.getMeasures()
          this.router.navigateByUrl('/dashboard');
        }
      })
    }

  }
}
