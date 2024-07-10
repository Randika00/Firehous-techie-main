import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css']
})
export class BookmarkDetailsComponent {
  bookmark:Bookmark = { name: '', url:'',description:'',status:'',date:''};

  constructor(
    private route:ActivatedRoute,
   private router:Router,
   private bookmarkService :BookmarkService
  ){}

  save(){
   if(this.bookmark.id) {
    this.bookmarkService.update(this.bookmark.id,this.bookmark).subscribe(()=>{
    this.router.navigateByUrl('/bookmarks');
    });
   }else{
    this.bookmarkService.create(this.bookmark).subscribe(()=>{
      this.router.navigateByUrl('/bookmarks');
    });
   }
  }

  cancel(){
    this.router.navigateByUrl('/bookmarks');
  }
}
