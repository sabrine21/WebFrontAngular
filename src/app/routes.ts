import { Routes } from '@angular/router';
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
import {ContactUsComponent} from './Views/contact-us/contact-us.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about_Us', component: AboutUsComponent},
  { path: 'how_it_works', component: HowItWorksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign_up', component: Sign_upComponent},
  { path: 'post_Announcement', component: PostAnnouncementComponent},
  { path: 'post_Request', component: PostRequestComponent},
  { path: 'view_Request', component: ViewRequestComponent},
  { path: 'product', component: ProductComponent},
  { path: 'medicament', component: MedicamentComponent},
  { path: 'medical_supplies', component: MedicalSuppliesComponent},
  { path: 'Contact_us', component: ContactUsComponent},
  { path: '', redirectTo: 'medicament',pathMatch:'full'},

];
