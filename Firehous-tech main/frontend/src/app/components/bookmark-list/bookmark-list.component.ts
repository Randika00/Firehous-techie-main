import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit{
  bookmarks?:Bookmark[];

  constructor(
   private bookmarkService:BookmarkService
  ){}

  ngOnInit(){
    this.bookmarkService.getAll().subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  delete(id:number){
    this.bookmarkService.delete(id).subscribe(()=>{
      this.bookmarks = this.bookmarks?.filter(item=> item.id !== id);
    })
  }

}
