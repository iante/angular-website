import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../post';
import { Location } from '@angular/common';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post: Post;


  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPostById(id);
    // this.post = this.getPostById(id);

  }

  getPostById(id: number) {
    return this.config.getPostByID(id).subscribe(
      post => this.post = post
    );
  }

  getBack() {
    this.location.back();
  }

}
