import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule, } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import {  FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ConfigService} from './config.service';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import {UserDashboardModule} from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { PricingModule } from './pricing/pricing.module';
import { GalleryModule } from './gallery/gallery.module';
import { WebsiteBlockComponent } from './website-block/website-block/website-block.component';
import { NotfoundModule } from './notfound/notfound.module';
import { BlogModule } from './blog/blog.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SocialComponent,
    NavigationComponent,
    LoginComponent,
    ContactusComponent,
    SignupComponent,
    NavmenuComponent,
    SubscribeComponent,
    WebsiteBlockComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HomeModule,
    AboutModule,
    PricingModule,
    BlogModule,
    GalleryModule,
    TestimonialsModule,
    ServicesModule,
    NotfoundModule,
    ReactiveFormsModule,
    UserDashboardModule,
    HttpClientModule,
    // using specific options with ValueProvider and passing HttpClient
MarkdownModule.forRoot({
  loader: HttpClientModule, // optional, only if you use [src] attribute
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      gfm: true,
      breaks: false,
      pedantic: false,
      smartLists: true,
      smartypants: false,
    },
  },
}),
//Delete code below once you have configued your website to work with db
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true}
        //passThruUnknownUrl allows a request that cant be found in the in memory database to be bypassed hence allowing us to define a handler for such requests
    )

   
  ],
  providers: [ConfigService, ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
