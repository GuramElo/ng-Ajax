import { Component, OnInit } from '@angular/core';
import { PostDataType } from 'src/app/Interfaces/post-data-type';
import { CurrentUserDataService } from 'src/app/Services/current-user-data.service';
import { FetchingService } from 'src/app/Services/fetching.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
public post_masivi:Array<any>=new Array();

  constructor(
//სერვისი
private user_storage:CurrentUserDataService
  ) { }

ngOnInit(): void {
//მზადდება ინფორმაცია დასაბეჭდად
this.post_masivi.push(...this.user_storage.user_post_data);
console.log(this.post_masivi);


}

}
