import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-line-diagram',
  templateUrl: './line-diagram.component.html',
  styleUrls: ['./line-diagram.component.css']
})

export class LineDiagramComponent implements OnInit {
  constructor(private appService: AppService) {
  }
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
      data?.res.forEach((obj: any) => {
        const value = obj.years?.split(',')?.map((str: string) => {
          return Number(str);
        });
        this.lineChartData.push({ data: value, label: obj.title });
      })
    })
  }

  lineChartLabels = ['', '', '', '', '', '', ''];


}


