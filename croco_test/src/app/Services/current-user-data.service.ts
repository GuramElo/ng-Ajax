import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserDataService {
public user_data:any;
public user_post_data:any;
//ნუ ინფორმაციის დროებითი საცავია
  constructor() {}
}
