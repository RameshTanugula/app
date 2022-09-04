import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-measures-form',
  templateUrl: './measures-form.component.html',
  styleUrls: ['./measures-form.component.css']
})
export class MeasuresFormComponent implements OnInit {
  @Input() data:any = [];
  @Input() title:string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.title, '----data$')
  }
  onClickButton(i: number){
this.data[i]['isSelected'] = !this.data[i]['isSelected'];
console.log(i, ';index', this.data)
  }
}
