import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  cars: Car[] = [
      {
        id: 0,
        marque: 'Audi',
        modele: 'A5'
      },
      {
        id: 1,
        marque: 'Kia',
        modele: 'Xceed'
      },
      {
        id: 2,
        marque: 'Fiat',
        modele: '124 spider'
      }
    ]
  
  selectedCar: any = this.cars[0]
  detailsCard: boolean = false

  showDetails(car: any): void{
    this.selectedCar = car 
    this.detailsCard = true 
  }
  hideDetails(): void {
    this.detailsCard = false
  }
}

interface Car {
  id: number
  marque: string
  modele: string
}