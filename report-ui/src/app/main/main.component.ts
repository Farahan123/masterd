import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ChartErrorEvent, ChartEvent, GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [':host > *:not(h1) { display: inline-block !important; }']
})
export class MainComponent implements OnInit {

   data = [["Rohit Sharma","100"],["Kohli","20"]];

  constructor(private httpClient: HttpClient) { }
  
  public ngOnInit() {
    this.getNews().subscribe((data)=>{
      console.log(data);
      this.data = data;
    });
  }

  public getNews(){
    return this.httpClient.get<any[]>(`http://localhost:8080/api/team/player`);
  }

  title = 'Browser market shares at a specific website, 2014';
  type = 'Bar';
  //data = [["Rohit Sharma","100"],["Kohli","20"]];
  /*data = [
     ['Firefox', 44.2],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];*/
  columnNames = ['Player', 'Runs'];
  options = {    
  };
  width = 800;
  height = 500;

}
