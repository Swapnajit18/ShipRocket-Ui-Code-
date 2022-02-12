import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule ,FormGroup,FormControl} from '@angular/forms';
import '@angular/compiler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { AgGridModule } from 'ag-grid-angular';
import { GriddataComponent } from './griddata/griddata.component';
import { AdminComponent } from './admin/admin.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    BookingComponent,
    GriddataComponent,
    AdminComponent,
    TrackingPageComponent,
    FooterComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AgGridModule.withComponents([]),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

