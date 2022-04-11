import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { DetailedUserComponent } from './Components/detailed-user/detailed-user.component';
import { UserPostsComponent } from './Components/user-posts/user-posts.component';
/*
გამარჯობათ.
აპლიკაციაში გამოყენებულია
3 დამატებითი კომპონენტი,
რომელიც ქვემოთაა დეკლარირებული
და 2 სერვისი ( ერთი ინფორმაციის წამოსაღებად, მეორე
დროებითი საცავისთვის აპლიკაციის ლეველზე).

დასაწყისისთვის ჯობს ჩაიხედოთ app-routing მოდულში


ხო და კომპონენტების დათვალიერების რეკომენდებული თანმიმდევრობა:
1. users
2. detailed-user
3. user-posts

*/
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailedUserComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
