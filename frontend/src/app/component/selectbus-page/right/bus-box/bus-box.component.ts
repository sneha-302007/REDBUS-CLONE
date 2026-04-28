import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bus-box',
  standalone: false,
  templateUrl: './bus-box.component.html',
  styleUrl: './bus-box.component.css'
})
export class BusBoxComponent implements OnChanges {

@Input() rating:number[]=[];
@Input() operatorname:string='';
@Input() bustype:string='';
@Input() departuretime:string='';
@Input() reschedulable:number=0;
@Input() livetracking:number=0;
@Input() selectedseats:any[]=[];
@Input() routedetails:any={};
@Input() busid:string='';

avgrating=0;
totalreview=0;
seatprivce=0;
bustypename='';
busdeparturetime=0;
busarrivaltime=0;

ngOnChanges(changes: SimpleChanges): void {
  console.log('bus-box ngOnChanges fired:', {
    routedetails: this.routedetails,
    operatorname: this.operatorname,
    bustype: this.bustype,
    selectedseats: this.selectedseats
  });

  

  //if(!this.routedetails?.duration) return;

  // rating
  this.totalreview = this.rating.length || 1;
  this.avgrating =
    this.rating.reduce((a,b)=>a+b,0) / this.totalreview;

  // type
  const type = this.bustype.toLowerCase();

  if(type === 'standard'){
    this.seatprivce = 50 * this.routedetails.duration / 2;
    this.bustypename = 'Standard';
  }
  else if(type === 'sleeper'){
    this.seatprivce = 100 * this.routedetails.duration / 2;
    this.bustypename = 'Sleeper';
  }
  else{
    this.seatprivce = 75 * this.routedetails.duration / 2;
    this.bustypename = this.bustype;
  }

  this.busdeparturetime = +this.departuretime || 0;
  this.busarrivaltime =
    (this.busdeparturetime + this.routedetails.duration) % 24;
}
}