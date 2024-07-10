import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../models/bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private apiUrl = "http://localhost:8080/api/bookmarks"

  constructor(private http:HttpClient){}
 
      getAll():Observable <Bookmark[]>{
        return this.http.get<Bookmark[]>(this.apiUrl);
      }

      getById(id:number):Observable<Bookmark>{
        return this.http.get<Bookmark>(`${this.apiUrl}/${id}`);
      }

      create(bookmark:Bookmark):Observable<Bookmark>{
        return this.http.post<Bookmark>(this.apiUrl,bookmark);
      }

      update(id:number,bookmark:Bookmark):Observable<Bookmark>{
        return this.http.put<Bookmark>(`${this.apiUrl}/${id}`,bookmark);
      }

      delete(id:number):Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
}
