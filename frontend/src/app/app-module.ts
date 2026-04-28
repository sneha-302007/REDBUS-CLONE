import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './component/landing-page/dialog/dialog.component';
import { HeaderComponent } from './component/selectbus-page/header/header.component';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './component/selectbus-page/left/left.component';
import { RightComponent } from './component/selectbus-page/right/right.component';
import { MatIconModule } from '@angular/material/icon';
import { SortingBarComponent } from './component/selectbus-page/right/sorting-bar/sorting-bar.component';
import { BusBoxComponent } from './component/selectbus-page/right/bus-box/bus-box.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BottomTabComponent } from './component/selectbus-page/right/bus-book/bottom-tab/bottom-tab.component';
import { ViewSeatsComponent } from './component/selectbus-page/right/view-seats/view-seats.component';
import { FormDrawerComponent } from './component/selectbus-page/right/form-drawer/form-drawer.component';
import { SmallSeatsComponent } from './component/selectbus-page/right/small-seats/small-seats.component';
import { BusBookingFormComponent } from './component/selectbus-page/right/bus-booking-form/bus-booking-form.component';
import { PaymentPageComponent } from './component/payment-page/payment-page.component';
import { ProfilePageComponent } from './component/profile-page/profile-page.component';
import { MyTripComponent } from './component/profile-page/my-trip/my-trip.component';
import { SelectbusPageComponent } from './component/selectbus-page/selectbus-page.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    LandingPageComponent,
    DialogComponent,
    SelectbusPageComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    SortingBarComponent,
    BusBoxComponent,
    BottomTabComponent,
    ViewSeatsComponent,
    FormDrawerComponent,
    SmallSeatsComponent,
    BusBookingFormComponent,
    PaymentPageComponent,
    ProfilePageComponent,
    MyTripComponent,

    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    // Add the necessary Angular Material modules to the imports array
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    MatTooltipModule,
  ],
  exports: [
    // Add the LandingPageComponent and DialogComponent to the declarations array
    // SelectbusPageComponent,
    // HeaderComponent,
    // LeftComponent,
    // RightComponent,
    // SortingBarComponent
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
