import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() thepost: Post = {
    title: 'Test Title',
    thought: 'Test thought'
  };

  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteMe(){
    this.delete.emit(this.thepost);
  }

}
