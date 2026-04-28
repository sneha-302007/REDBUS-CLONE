import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  fromoption: string = '';
  tooption: string = '';
  date: string = '';
  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) {}
  fromEvent(option: string) {
    this.fromoption = option;
    console.log(this.fromoption);
  }
  toEvent(option: string) {
    this.tooption = option;
  }
  matchDate(event: any) {
    if (event.value) {
      const date = new Date(event.value);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      this.date = `${year}-${month}-${day}`;
    } else {
      this.date = 'null';
    }
    console.log(this.date);
  }

  isloggedin(): boolean {
    return sessionStorage.getItem('Loggedinuser') !== null;
  }

  submit() {
    console.log('submit clicked');
    console.log(this.fromoption, this.tooption);
    if (!this.isloggedin()) {
      alert('Please login to continue');
    } else {
      if (this.fromoption && this.tooption && this.date) {
        this.router.navigate(['/select-bus'], {
          queryParams: {
            departure: this.fromoption,
            arrival: this.tooption,
            date: this.date,
          },
        });
      } else {
        alert('fill up the details!!!');
      }
    }
  }
}
