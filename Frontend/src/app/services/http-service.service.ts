import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string){
    return this.http.get<any>(environment.apiURL + url);
    // .pipe(
    //   map( data => {
    //     const systems: Array<ISystem> = [];
    //     for(let item in data){
    //       systems.push(data[item]);
    //     }
    //     return systems;
    //   })
    // );
  }

  public post(url: string, payload: any){
    return this.http.post<any>(url, payload);
  }
}
