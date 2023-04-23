import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPosts: any[] = [];

  constructor(
    private postServices: PostService
  ) { }

  ngOnInit(): void {
    this.postServices.getPosts().subscribe((res) => {
      console.log(res);
      
      this.listPosts = res.posts;
    });
  }

}
