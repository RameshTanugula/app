import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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

  steps = [
    {
      title: 'Population Count', nextButton: true, prevButton: false,
      data: [{ isSelected: false, content: 'Quota for social housing', value: 3 },
      { isSelected: false, content: 'Low assessment rate for property tax B', value: 1 },
      { isSelected: false, content: 'Development of new residential areas (1 point per 100 units)', value: -1 },
      { isSelected: false, content: 'Addition of storeys to existing buildings (1 point per 100 CU)', value: -1 },
      { isSelected: false, content: ' Redensification on open spaces (1 point per 100 units)', value: -1 },
      { isSelected: false, content: 'Attractive design (greenery, tranquility, water, ...)', value: 2 },
      { isSelected: false, content: 'Conversion of residential use to other use', value: -2 }
      ]
    },
    {
      title: 'Compact City', nextButton: true, prevButton: true,
      data: [{ isSelected: false, content: 'Redensification with / near mixed use', value: 3 },
      { isSelected: false, content: 'Apartment building', value: 2 },
      { isSelected: false, content: 'Multi-storey commercial buildings / commercial courtyards', value: 2 },
      { isSelected: false, content: 'Supply for daily needs in max. 500m reachable', value: 3 },
      { isSelected: false, content: 'Mixed areas with small-scale commercial use', value: 2 },
      { isSelected: false, content: 'Attractive, interconnected public green spaces in the neighborhood', value: 2 },
      { isSelected: false, content: 'Public uses on the first floor', value: 2 },
      { isSelected: false, content: 'Public spaces as attractive meeting places', value: 2 },
      { isSelected: false, content: 'Bundled parking spaces in the neighborhood instead of on the street', value: 1 },
      { isSelected: false, content: 'Development in the outer area (§ 35 BauGB)', value: -3 },
      { isSelected: false, content: 'Detached single family houses', value: -2 },
      { isSelected: false, content: 'Settlement Arrondissements', value: -1 },
      { isSelected: false, content: 'Space requirements for parking spaces at ground level', value: -1 },
      { isSelected: false, content: 'MIV-oriented large structures', value: -3 },
      { isSelected: false, content: 'Large-scale retail trade (aggravated by location plans)', value: -2 },
      { isSelected: false, content: 'Monotonous design of surfaces and buildings', value: -1 },
      { isSelected: false, content: 'Roadside parking spaces for motor vehicles', value: -1 },
      ]
    },
    {
      title: 'Economic power', nextButton: true, prevButton: true,
      data: [{ isSelected: false, content: 'Designation of land for commercial/retail/service activities', value: 3 },
      { isSelected: false, content: 'Effectively soliciting new business', value: 3 },
      { isSelected: false, content: 'Multi-storey commercial buildings as planning standard', value: 3 },
      { isSelected: false, content: 'Development of existing commercial buildings in height', value: 2 },
      { isSelected: false, content: 'Revitalization of old industrial sites', value: 1 },
      { isSelected: false, content: 'Focus development on labor-intensive industries', value: 1 },
      { isSelected: false, content: ' Enable company apartments', value: 1 },
      { isSelected: false, content: ' Conversion of commercial space into residential use', value: -2 },
      { isSelected: false, content: ' Land consumption due to parking spaces at ground level', value: -2 },
      { isSelected: false, content: '"Downcycling" of commercial space', value: -1 }
      ]
    },


    {
      title: 'Walking Accessibility', nextButton: true, prevButton: true,
      data: [
        { isSelected: false, content: "Seamless footpath network", value: 3 },
        { isSelected: false, content: "Long waiting times at street crossings", value: -2 },
        { isSelected: false, content: "Continuous barrier-free routing incl. crossings", value: 2 },
        { isSelected: false, content: "Obligation to wait at traffic lights when the road is clear", value: -1 },
        { isSelected: false, content: "Direct routing without detours to all destinations", value: 2 },
        { isSelected: false, content: "Side streets interrupt footpaths (no crossing)", value: -1 },
        { isSelected: false, content: "Road independent / crossing free routing", value: 1 },
        { isSelected: false, content: "Max. 30 km/h to reduce (severity of) accidents", value: 3 },
        { isSelected: false, content: "Lack of visual fields at crossing points", value: -3 },
        { isSelected: false, content: "Regular crossing aids at roads as standard", value: 2 },
        { isSelected: false, content: "Unlit, non-visible sidewalks", value: -3 },
        { isSelected: false, content: "Sidewalk width >2.5m (encountering walker/stroller)", value: 2 },
        { isSelected: false, content: "Uneven / damaged sidewalk surfaces", value: -2 },
        { isSelected: false, content: "Priority for pedestrian traffic (play streets)", value: 2 },
        { isSelected: false, content: "Reduction of sidewalk width due to special use", value: -1 },
        { isSelected: false, content: "(many) seating and loitering opportunities", value: 2 },
        { isSelected: false, content: "Barriers along sidewalks / at edge of roadway", value: -1 },
        { isSelected: false, content: "Weather protection (rain, heat) for paths trees", value: 1 },
        { isSelected: false, content: "Mixed traffic (shared pedestrian and bicycle paths)", value: -1 }]
    },
    {
      title: 'Bicycle accessibility', nextButton: true, prevButton: true, data: [
        { isSelected: false, content: "Sufficient bicycle parking facilities directly at source + destination", value: 3 },
        { isSelected: false, content: "Car is closer to source + destination than bicycle", value: -2 },
        { isSelected: false, content: "Ground-level, covered and secure bicycle parking facilities", value: 2 },
        { isSelected: false, content: "Conflicts in mixed traffic (with pedestrian or motor vehicle traffic).", value: -2 },
        { isSelected: false, content: "Cycle path network in the area / connection to overall network", value: 3 },
        { isSelected: false, content: "Indirect routing with detours", value: -2 },
        { isSelected: false, content: "Bike lane width designed for cargo bikes / overtaking", value: 2 },
        { isSelected: false, content: "Long waiting times at (on-demand) traffic lights Traffic", value: -2 },
        { isSelected: false, content: "Road-independent / intersection-free routing", value: 2 },
        { isSelected: false, content: "Uneven / damaged bike lane surfaces gone", value: -1 },
        { isSelected: false, content: "Green wave designed for bike traffic (20 km/h)", value: 2 },
        { isSelected: false, content: "Thresholds in bike lane at road junctions", value: -1 },
        { isSelected: false, content: "Priority for bicycle traffic (e.g. bicycle lane)", value: 1 },
        { isSelected: false, content: "Green phases linked to pedestrian traffic speed", value: -1 },
        { isSelected: false, content: "Safe guidance at intersections with traffic lights", value: 3 },
        { isSelected: false, content: "Lack of visual fields at crossing points Traffic", value: -3 },
        { isSelected: false, content: "Bike lane effectively protected from motor vehicle traffic", value: 2 },
        { isSelected: false, content: "No safe distance from parked motor vehicles Safety", value: -2 },
        { isSelected: false, content: "Subjective safety in design of bike lanes", value: 2 },
        { isSelected: false, content: "Unlit bike lanes that are not visible to traffic", value: -2 }]
    },
    {
      title: 'Public Transport Accessibility', nextButton: true, prevButton: true, data: [
        { isSelected: false, content: "Public transport stop(s) no more than 300m from destination", value: 3 },
        { isSelected: false, content: "Public transport stop further than car parking area", value: -2 },
        { isSelected: false, content: "Safe, barrier-free access routes to stops", value: 2 },
        { isSelected: false, content: "Stops can only be reached via detours", value: -1 },
        { isSelected: false, content: "Sense of safety and comfort at stops", value: 1 },
        { isSelected: false, content: "Unattractive stops (lighting, roofing,...)", value: -1 },
        { isSelected: false, content: "Direct connection to important destinations without changing trains", value: 3 },
        { isSelected: false, content: "Lack of prioritization at conflict points/sections", value: -2 },
        { isSelected: false, content: "Tightly timed connections (short waiting times)", value: 2 },
        { isSelected: false, content: "Stops in bus bays", value: -1 },
        { isSelected: false, content: "Adapted frequency to operating or shift times", value: 2 },
        { isSelected: false, content: "Long service times (evenings, nights)", value: 1 },
        { isSelected: false, content: "Clear timetable and fare system", value: 2 },
        { isSelected: false, content: "Irregular frequency", value: -1 },
        { isSelected: false, content: "Routing on priority roads", value: 1 },
        { isSelected: false, content: "Lack of links to other means of transport", value: -1 }]
    },
    {
      title: 'Motor Vehicle Accessibility', nextButton: false, prevButton: true, data: [
        { isSelected: false, content: "Car parking spaces directly in front of / under each building", value: 3 },
        { isSelected: false, content: "Bundled parking spaces (neighborhood garage)", value: -3 },
        { isSelected: false, content: "Generous parking spaces in public areas", value: 2 },
        { isSelected: false, content: "Reduction of existing parking spaces in public areas", value: -3 },
        { isSelected: false, content: "No parking spaces in case of proven car abandonment", value: -2 },
        { isSelected: false, content: "Green wave specially adapted to MIV", value: 2 },
        { isSelected: false, content: "Disturbance of motor vehicle flow at traffic lights", value: -2 },
        { isSelected: false, content: "Street space design optimized for motor vehicles", value: 2 },
        { isSelected: false, content: "Access restrictions (e.g. low emission zone)", value: -2 },
        { isSelected: false, content: "Parking guidance system (facilitated search for parking spaces)", value: 1 },
        { isSelected: false, content: "Mixed traffic with cyclists", value: -1 },
        { isSelected: false, content: "Reduction of maximum speed", value: -1 },
        { isSelected: false, content: "Lack of visibility at junctions", value: -2 },
        { isSelected: false, content: "Parking space management (for beneficiaries)", value: 1 },
        { isSelected: false, content: "No separation of conflict flows at traffic lights", value: -1 },
        { isSelected: false, content: "Generously dimensioned parking stands and access roads", value: 1 },
        { isSelected: false, content: "Parking space management (for payers)", value: -1 }]
    }]
  constructor(private _formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
  }
  selectionChange(event: any) {

  }
  complete() {
    this.stepper.selectedIndex = 3;
  }
  onSubmit() {
    let sumArray: any = [];
    for (let i = 0; i < this.steps.length; i++) {
      let count = 0;
      this.steps[i].data.forEach((obj, j) => {
        if (obj.isSelected) {
          count = count + obj.value;
        }
      })
      sumArray.push(count);
      count =0;
    }

  }
  // next(){

  // }
}
