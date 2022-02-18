import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule ,FormGroup,FormControl} from '@angular/forms';
import '@angular/compiler';
import { MatDialogModule } from '@angular/material/dialog';

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
import { StatusPopupComponent } from './status-popup/status-popup.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStatusComponent } from './add-status/add-status.component';
import { AddCommentComponent } from './add-comment/add-comment.component';





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
    StatusPopupComponent,
    AddStatusComponent,
    AddCommentComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatCommonModule,
    BrowserAnimationsModule,MatDialogModule,
    AgGridModule.withComponents([]),

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddStatusComponent]
})
export class AppModule { }

