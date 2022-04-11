import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingService {

  constructor(private fetcher:HttpClient) { }

public get_data(data_name:string):Observable<any>{
  /* ეს მეთოდი აბრუნებს observable-ს, რომლის მოსმენაც კომპონენტებში ხდება subscribe-ით*/
  return (this.fetcher.get<any>(`https://jsonplaceholder.typicode.com/${data_name}`) as Observable<any>);

}
}
