import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../../../service/bus.service';
import { Bus } from '../../../model/bus.model';
import { Route } from '../../../model/routes.model';

@Component({
  selector: 'app-right',
  standalone: false,
  templateUrl: './right.component.html',
  styleUrl: './right.component.css',
})
export class RightComponent implements OnInit {
  matchedbus: Bus[] = [];
  routes: Route | null = null;
  seats: { [key: string]: any } = {};

  departurevar: string = '';
  arrival: string = '';
  date: string = '';

  constructor(
    private route: ActivatedRoute,
    private busservice: BusService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone   // 👈 add this
  ) {}

  getkeys() {
    return Object.keys(this.seats);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.departurevar = params['departure'];
      this.arrival = params['arrival'];
      this.date = params['date'];

      console.log(this.departurevar, this.arrival, this.date);

      this.busservice
        .GETBUSDETAILS(this.departurevar, this.arrival, this.date)
        .subscribe((response: any) => {

          // 👇 wrap everything in ngZone.run() to force Angular to detect changes
          this.ngZone.run(() => {
            this.matchedbus = [...response.matchedBuses];  // spread forces new array ref
            this.routes = response.route;
            this.seats = { ...response.busidwithseatobj }; // spread forces new object ref

            console.log('matchedbus:', this.matchedbus);
            console.log('routes:', this.routes);
            console.log('seats:', this.seats);

            this.cdr.detectChanges(); // 👈 NOW actually called
          });
        });
    });
  }
}