import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { GaurdService } from './gaurd.service';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { ClientsModule } from './clients/clients.module';
import { PricingModule } from './pricing/pricing.module';
import { GalleryModule } from './gallery/gallery.module';
import { NotfoundModule } from './notfound/notfound.module';
import { BlogModule } from './blog/blog.module';




/* Adding routing to the different pages on the website*/
const routes: Routes = [
  /* creating a redirection to home page incase nothing matches*/
{path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'about', loadChildren: () => AboutModule},
  {path: 'gallery', loadChildren: () => GalleryModule},
  {path: 'services', loadChildren: () => ServicesModule },
  {path: 'testimonials', loadChildren: () => TestimonialsModule},
  {path: 'clients', loadChildren: () => ClientsModule},
  {path: 'pricing', loadChildren: () => PricingModule},
  {path: 'blog', loadChildren: () => BlogModule, canActivate: [GaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'subscribe', component: SubscribeComponent, outlet: 'popup'}, /*appears as a popup window */
  {path: 'contactus', component: ContactusComponent,  outlet: 'popup'},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', loadChildren:  () => UserDashboardModule,  canActivate: [GaurdService]},
  {path: '404', loadChildren: () => NotfoundModule},
  {path: '**', redirectTo: '/404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
