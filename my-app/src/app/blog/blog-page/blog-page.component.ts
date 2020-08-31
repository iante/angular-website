import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { ConfigService } from 'src/app/config.service';
import { PagerService } from '../pager.service';
import {faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  faPlus = faPlus;

  blog: {id: string,
    name: string,
    tagline: string,
    title: string,
    description: string
  }[];

  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  posts: Post[];

  constructor(private config: ConfigService, private pagerService: PagerService) { }

  ngOnInit()
  {
    this.getPageData('pages', 'blog');
    this.getBlockData('posts');
  }
  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.blog = data;
        console.log(this.blog);
      }
    );
  }

  getBlockData(database: string ) {
    this.config.getSettings(database ).subscribe(
      data => {
        this.posts = data;
        this.allItems = this.posts;
        this.setPage(1);
        console.log(this.posts);
      }
    );
  }

  setPage(pageNumber: number) {
    // create a pager using paging service
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

    // current page posts
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

    console.log(this.pager);
  }

}
