import { UsersComponent } from './Components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedUserComponent } from './Components/detailed-user/detailed-user.component';
import { UserPostsComponent } from './Components/user-posts/user-posts.component';

const routes: Routes = [
{path:"", redirectTo:"Users", pathMatch:'full'},
{path:"Users", component: UsersComponent},
{path:"UserInfo", component: DetailedUserComponent},
{path:"UserPosts", component: UserPostsComponent}
];
/*
უფრო სერიოუზული და მასშტაბური
ინფორმაციის წამოღებისას რეკომენდებულია
რესოლვერი და route-ის ჩატვირთვის delay
სანამ პასუხი დაგვიბრუნდება და გამზადდება დასახატად,(შეგიძლიათ ჩემი github-სი პროფილი დაათვალიეროთ)
აქ სერვისში და ადგილობრივად კომპონენტებში ვინახავ, ვინაიდან 10 user-ის info არ აყოვნებს მოსვლას.


*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
