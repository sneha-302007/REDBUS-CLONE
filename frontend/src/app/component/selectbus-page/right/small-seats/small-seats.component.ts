import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-small-seats',
  standalone: false,
  templateUrl: './small-seats.component.html',
  styleUrl: './small-seats.component.css'
})
export class SmallSeatsComponent {
@Input() seatno:number=0
@Input() alreadybookedseats:number[]=[]
@Input() selectedseats:number[]=[]
@Output() seatselected:EventEmitter<number> =new EventEmitter<number>()

getcolor(seatno:number):string{
  if(this.selectedseats.includes(seatno)){
    return 'blue';
  }else if(this.alreadybookedseats.includes(seatno)){
    return 'red';
  }else{
    return 'black'
  }
}
onclick():void{
  this.seatselected.emit(this.seatno)
}
handleselectedseats(seatno:number):void{
  console.log(this.alreadybookedseats)
  console.log('selected seat:',seatno)
}
handleseatbooking(seatno: number) {
  if (!this.alreadybookedseats.includes(this.seatno)) {
    if (this.selectedseats.includes(this.seatno)) {
      // Create a NEW array instead of mutating — triggers change detection
      this.selectedseats = this.selectedseats.filter(s => s !== seatno);
      console.log('deselected seat', seatno);
    } else {
      console.log('selecting seat', this.seatno);
      this.selectedseats = [...this.selectedseats, this.seatno];
    }
    // Emit so the parent updates its own selectedseats reference
    this.seatselected.emit(this.seatno);
  } else {
    console.log("Seat already booked");
  }
}

}