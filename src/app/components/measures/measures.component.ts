import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  steps=[
  {title:'Population Count', nextButton:true, prevButton: false, 
  data:[{isSelected: false, content:'sample data for poplation count -1'},
  {isSelected: false, content:'sample data for poplation count -2'},
  {isSelected: false, content:'sample data for poplation count -3'},
  {isSelected: false, content:'sample data for poplation count -4'},
  {isSelected: false, content:'sample data for poplation count -5'},
  {isSelected: false, content:'sample data for poplation count -6'}]},
  {title:'Economic power', nextButton:true, prevButton: true,
  data:[
  {isSelected: false, content:'sample data for Economic power -1'},
  {isSelected: false, content:'sample data for Economic power -2'},
  {isSelected: false, content:'sample data for Economic power -3'},
  {isSelected: false, content:'sample data for Economic power -4'},
  {isSelected: false, content:'sample data for Economic power -5'},
  {isSelected: false, content:'sample data for Economic power -6'}]},
  {title:'C', nextButton:true, prevButton: true, data:[
    {isSelected: false, content:'sample data for Economic power -1'},
    {isSelected: false, content:'sample data for Economic power -2'},
    {isSelected: false, content:'sample data for Economic power -3'},
    {isSelected: false, content:'sample data for Economic power -4'},
    {isSelected: false, content:'sample data for Economic power -5'},
    {isSelected: false, content:'sample data for Economic power -6'}]},
  {title:'D', nextButton:true, prevButton: true, data:[
    {isSelected: false, content:'sample data for Economic power -1'},
    {isSelected: false, content:'sample data for Economic power -2'},
    {isSelected: false, content:'sample data for Economic power -3'},
    {isSelected: false, content:'sample data for Economic power -4'},
    {isSelected: false, content:'sample data for Economic power -5'},
    {isSelected: false, content:'sample data for Economic power -6'}]},
  {title:'E', nextButton:true, prevButton: true,data:[
    {isSelected: false, content:'sample data for Economic power -1'},
    {isSelected: false, content:'sample data for Economic power -2'},
    {isSelected: false, content:'sample data for Economic power -3'},
    {isSelected: false, content:'sample data for Economic power -4'},
    {isSelected: false, content:'sample data for Economic power -5'},
    {isSelected: false, content:'sample data for Economic power -6'}]},
  {title:'F', nextButton:false, prevButton: true, data:[
    {isSelected: false, content:'sample data for Economic power -1'},
    {isSelected: false, content:'sample data for Economic power -2'},
    {isSelected: false, content:'sample data for Economic power -3'},
    {isSelected: false, content:'sample data for Economic power -4'},
    {isSelected: false, content:'sample data for Economic power -5'},
    {isSelected: false, content:'sample data for Economic power -6'}]}]
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }
  
complete(){

}
next(){

}
}
