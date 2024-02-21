import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { AboutUsComponent } from './Views/home/about-us/about-us.component';
import { HowItWorksComponent } from './Views/how-it-works/how-it-works.component';
import { LoginComponent } from './Views/login/login.component';
import { Sign_upComponent } from './Views/sign_up/sign_up.component';
import { PostAnnouncementComponent } from './Views/post-announcement/post-announcement.component';
import { PostRequestComponent } from './Views/post-request/post-request.component';
import { ViewRequestComponent } from './Views/view-request/view-request.component';
import { ProductComponent } from './Views/product/product.component';
import { MedicamentComponent } from './Views/product/medicament/medicament.component';
import { MedicalSuppliesComponent } from './Views/product/medical-supplies/medical-supplies.component';
import {ContactUsComponent} from './Views/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HowItWorksComponent,
    LoginComponent,
    Sign_upComponent,
    PostAnnouncementComponent,
    PostRequestComponent,
    ViewRequestComponent,
    ProductComponent,
    MedicamentComponent,
    MedicalSuppliesComponent
  ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
