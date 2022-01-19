import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    { title: 'A love story', thought: 'Lovey dovey thoughts :)'},
    { title: 'A love story 2', thought: 'Lovey dovey thoughts 2 :)'},
    { title: 'A love story 3', thought: 'Lovey dovey thoughts 3 :)'}
  ];

  newtitle: string = '';
  newthought: string = '';
  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  savePost() {
    this.posts.unshift(
      { title: this.newtitle, thought: this.newthought}
    );
    this.isVisible = false;
  }

  showCreateForm(){
    this.newtitle = '';
    this.newthought = '';
    this.isVisible = true;
  }

  deletePost(thepost: Post){
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i] == thepost){
        this.posts.splice(i,1);
        return;
      }
    }
  }

}
