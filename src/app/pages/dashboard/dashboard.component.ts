import { Chart } from 'chart.js/auto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit(): void {
    this.createBarChart();
    this.createLineaChart();
  }
  public chart: any;
  createBarChart(){  
    this.chart = new Chart("MyBarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Lunes', 'Martes', 'Miercoles','Jueves',
								 'Viernes', 'Sabado', 'Domingo'], 
	       datasets: [
          {
            label: "Ventas",
            data: ['467','576', '572', '79', '92',
								 '574', '573'],
            backgroundColor: '#003049'
          },
          {
            label: "Total Dinero",
            data: ['542', '542', '536', '327', '17',
									 '500', '538'],
            backgroundColor: '#F77F00'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  //Linea Grafica//
  createLineaChart(){
  
    this.chart = new Chart("MyLineChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: '#003049'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: '#F77F00'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
