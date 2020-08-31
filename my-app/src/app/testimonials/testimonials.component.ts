import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials ={
    tagline: 'FEEDBACK',
    title: 'What our customers are saying',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
feedbacks:[
    {name:'John Doe', userImage:'user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company:'KBC'},
    {name:'Roslyn Doe', userImage:'user-2.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company:'NTV'},
    {name:'Thomas Doe', userImage:'user-3.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company:'CITIZEN'},
  ]
  };

  constructor(private config: ConfigService) { }

  ngOnInit() {

    this.testimonials = this.getTestimonials();
  }

  getTestimonials() {

    return this.config.getConfig().testimonials;
  }

}
