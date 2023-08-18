import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
//import { YourSpringBootService } from './your-spring-boot-service'; // Import your Spring Boot service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  graphData: any; // Placeholder for graph data

  //constructor(private springBootService: YourSpringBootService) {}

  ngOnInit() {
    //this.fetchGraphData(); // Fetch graph data when component initializes
  }

  ngAfterViewInit() {
    this.createGraph();
  }

  createGraph() {
    const canvas = document.getElementById('graph-placeholder') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx && this.graphData) {
        new Chart(ctx, {
          type: 'line',
          data: this.graphData,
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true
              },
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

//   fetchGraphData() {
//     // Call your Spring Boot service to fetch graph data
//     //this.springBootService.getGraphData().subscribe(
//       (data: any) => {
//         // Process and format the fetched data as needed
//         this.graphData = data;
//         this.createGraph(); // Create the graph once data is fetched
//       },
//       (error: any) => {
//         console.error('Error fetching graph data:', error);
//       }
//     );
//   }
// }
}