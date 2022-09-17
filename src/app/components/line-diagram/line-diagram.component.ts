import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataset, ChartOptions } from 'chart.js';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-line-diagram',
  templateUrl: './line-diagram.component.html',
  styleUrls: ['./line-diagram.component.css']
})

export class LineDiagramComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) {
  }
  categories = [
    {title:"Population count", id:0},
    {title:"Compact City", id:1},
    {title:"Economic power", id:2},
    {title:"Walking Accessibility", id:3},
    {title:"Bicycle Accessibility", id:4},
    {title:"Public Transport Accessibility", id:5},
    {title:"Motor Vehicle Accessibility", id:6}];
  lineChartData: ChartDataset[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  ngOnInit(): void {


    this.loadData();
  }
  loadData() {
    this.appService.getMeasures().subscribe(data => {
      data?.res[0].forEach((obj: any) => {
        const value = obj.years?.split(',')?.map((str: string) => {
          return Number(str);
        });
        this.lineChartData.push({ data: value, label: obj.title });
      })
    })
  }

  lineChartLabels = ['', '', '', '', '', '', ''];

  onClickButton(item:any){
    if (window.confirm("Do you really want to leave?")) {
    
    if(item === -1){
      this.router.navigateByUrl('/select-measures');
    } else if(item === -2){
      this.router.navigateByUrl('/dashboard');
    } else{
    window.localStorage.setItem("selectedIndex", item.id);
    this.router.navigateByUrl('/select-measures');
    }
  }
}
}


