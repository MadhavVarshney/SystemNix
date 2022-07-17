import { Injectable } from '@angular/core';
import { apiConstants } from './apiContants';
import { HttpServiceService } from './http-service.service';


@Injectable({
  providedIn: 'root'
})
export class AllConfirmationService {

  constructor(
    private httpService: HttpServiceService
  ) { }

  getOrderListing(){
    return this.httpService.get(apiConstants.entries);
  }

  getDetail(){
    return this.httpService.get("url");
  }

  getSortedList(payload: any){
    return this.httpService.post("url", payload);
  }

  deleteItem(){
    return this.httpService.get("url");
  }
}
