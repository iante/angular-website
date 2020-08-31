import { Component, OnInit, Input } from '@angular/core';
import { Post,  } from '../../post';
import {faHeart, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css']
})
export class PostBlockComponent implements OnInit {

  faHeart = faHeart;
  faEdit = faEdit;

  @Input()  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
