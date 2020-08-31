import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  menu: {id: number,
    title: string,
    link: string,
    outlet: string
  }[];
  
  isLoggedIn: boolean;
  menuOpen: boolean;
  database = 'menu';
  profileImage: string;
  user: any;

  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService
  ) { }

  ngOnInit() {
  //function below gets menu from database at time of initialization

    this.menuOpen = false;
    this.getMenu();
    this.isLoggedIn = this.auth.isloggedIn();
    this.getUser();

    }
    /*AfterContentChecked is loaded after everything on ngOnit has loaded and only loads when there is a change
  In this case, we are creating an observable to monitor isloggedin 
  if isloggedin is true, fetch user again*/
  
  ngAfterContentChecked() {
    of(this.auth.isloggedIn()).subscribe(
      () => {
        this.getUser();
      }
    );

  }

  logout() {
    this.auth.logout();
  }

//Toggles menu based on the status
  toggleMenu(status: boolean) {
    this.menuOpen = status;
    
    // this.menuOpen = !this.menuOpen; //interchanges the values
  }

  getMenu() {
    this.config.getSettings(this.database).subscribe(

      setting => {
        this.menu = setting;
        console.log(setting);
      }

    );
  }
  
  //gets current user information if it exists

  getUser() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    if (this.user) {
      this.profileImage = this.user.image;
    } else {
      this.profileImage = 'default-user.jpg';
    }

  }



}

// ngOnIt this.activetab = this.location.path();
    //console.log('from ${this.activetab}');

/* creating a function that checks the active tab*/
  //getActiveTab(tabname: string){

//this.activetab = tabname;
//console.log(tabname);
  //}
  
  
  //using jquery for sticky nav menu. call it on ngOnIt
   //(<any>$)(document).ready(function(){
/*Responsive Navigation*/
//(<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
//(<any>$)('#nav-trigger span').on('click',function() {
//  if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
 //   (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
  //  (<any>$)(this).removeClass('open');
 // } else {
   // (<any>$)('nav#nav-mobile ul').addClass('expanded').slideDown(250);
   // (<any>$)(this).addClass('open');
 // }
//});

//(<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
//(<any>$)('#nav-mobile ul a').on('click',function() {
 // if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
    //(<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
    //(<any>$)('#nav-trigger span').removeClass('open');
  //}
//});



    //});
