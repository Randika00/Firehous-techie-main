import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarkListComponent},
  {path: 'bookmarks/new', component: BookmarkDetailsComponent},
  {path: 'bookmarks/:id', component: BookmarkDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
