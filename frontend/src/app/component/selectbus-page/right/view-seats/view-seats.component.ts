import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-seats',
  standalone: false,
  templateUrl: './view-seats.component.html',
  styleUrl: './view-seats.component.css',
})
export class ViewSeatsComponent {
 @Input() selectedseats:number[]=[];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busid: string = '';
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;
  @Input() operatorname: string = '';
 
  boardanddrop: boolean = false;

  generatearray(length: number): number[] {
    return Array.from({ length }, (_, index) => index + 1);
  }
 handleselectedseats(seatno: number): void {
  if (this.selectedseats.includes(seatno)) {
    this.selectedseats = this.selectedseats.filter((item) => item !== seatno);
  } else {
    this.selectedseats = [...this.selectedseats, seatno]; // ← new array reference
  }
}
}
