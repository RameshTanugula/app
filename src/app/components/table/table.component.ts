import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'Year1', 'Year2', 'Year3','Year4','Year5','Year6','Year7','Year8','Year9','Year10'];
  
  dataSource: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getMeasures();
  }
  getMeasures() {
    this.appService.getMeasures().subscribe(data => {
      this.dataSource = data?.res[0];
      let list: any = [];
      data.res[0].forEach((obj: any) => {
        if (obj.years) {
          const tmpValue = obj.years?.split(',');
          if (tmpValue) {
            list.push({
              title: obj.title, y1: tmpValue[0], y2: tmpValue[1],
              y3: tmpValue[2], y4: tmpValue[3], y5: tmpValue[4], y6: tmpValue[5],
              y7: tmpValue[6], y8: tmpValue[7], y9: tmpValue[8], y10: tmpValue[9]
            });
          }

        }
      })
      this.dataSource = list
    })
  }
}
