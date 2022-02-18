import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { GriddataComponent } from './griddata/griddata.component';
import { AdminComponent } from './admin/admin.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { AddStatusComponent } from './add-status/add-status.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
{path:'',component:HomeComponent},{path:'contact',component:ContactComponent},
{path:'aboutus',component:AboutusComponent},{path:'login',component:LoginComponent},
{path:'booking',component:BookingComponent},{path:'griddata',component:GriddataComponent},
{path:'admin',component:AdminComponent},{path:'tracking-page',component:TrackingPageComponent},{
  path:'add-status',component:AddStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
