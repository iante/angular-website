import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  ngOnInit(){

    /* Parallax Effects */
	if (!!(<any>$).prototype.enllax) {
    (<any>$)(window).enllax();
	}
  }

  
}
