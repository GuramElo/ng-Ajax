import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostDataType } from 'src/app/Interfaces/post-data-type';
import { CurrentUserDataService } from 'src/app/Services/current-user-data.service';
import { FetchingService } from 'src/app/Services/fetching.service';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.scss']
})
export class DetailedUserComponent implements OnInit {
public curr_user:any;
public masivi:Array<any>=new Array();


constructor(
  //სერვისები
private user_storage:CurrentUserDataService,
private fetcher:FetchingService
) { }



public save_posts():void{
//ნუ ანალოგიურად იფეჩება და იჰენდლება ინფორმაცია,
//თან წინასწარ ინახება შემდეგი - user-posts კომპონენტისთვის
// გამოძახება ხდება დაბლა - ngOninit-ში
  this.fetcher.get_data("posts").subscribe((post:PostDataType):void=>{

  let arr:PostDataType=[];
  //      ^^^^^^^^^^^^
  //ესაა წინასწარ დაწერილი შაბლონი,
  //ინტერფეისი იქიდან მოსული მასივისთვის, რომელსაც უნდა აკმაყოფილებდეს
  // (შეგიძლიათ ნახოთ ინტერფეისების ფოლდერში)
  for(let i of (post as any)){
  if(i?.userId==this.user_storage.user_data?.id){
  (arr as Array<any>).push(i);
  }
  }
  this.user_storage.user_post_data=arr;
  });
}







  ngOnInit(): void {
    /*
    ნუ იყენდლება და მოსახერხებლად ინახება ინფორმაცია
    */
    this.curr_user=JSON.parse(JSON.stringify(this.user_storage.user_data));

    for(let i in this.curr_user){
      this.masivi.push([i,JSON.stringify(this.curr_user[i])]);
    }
    //===================
    this.save_posts();
    //===================
  }

}
