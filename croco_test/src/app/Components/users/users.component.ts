import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import { FetchingService } from 'src/app/Services/fetching.service';
import { UserDataType } from 'src/app/Interfaces/user-data-type';
import { CurrentUserDataService } from 'src/app/Services/current-user-data.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public user_mas:any;

constructor(
//წვდომა სერვისებთან
private fetch_service:FetchingService,
private user_storage:CurrentUserDataService
){ }


public store_values(id:number):void{
//route-ის ვცლილებამდე გლობალურ სერვისში ინახება შესაბამისი ინფორმაცია,
//რის მიხედვითან სამიზნე როუტში უნდა დაიხატოს რაღაცები
//
//
//
this.user_storage.user_data=this.user_mas[id-1];
}



ngOnInit(): void {
/*
ნუ აქ სერვისს ვიყენებ და user_mas ცვლადში ვწერ მოსულ მასივს,
რომელსაც ngFor-მა უნდა გადაუაროს და დახატოს
*/
 this.fetch_service.get_data("Users").subscribe(
(user_arr:UserDataType):void=>{
//         ^^^^^^^^^^
//მასივის ინტერფეისი შეგიძლიათ ნახოთ ინტერფეისების ფოლდერში
   this.user_mas=user_arr;
},
(errore:Error):void=>{
  console.log(errore.message);
}

)


}





  }
