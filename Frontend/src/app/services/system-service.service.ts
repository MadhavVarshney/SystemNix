import { Injectable } from '@angular/core';
import { System } from '../modal/System';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SystemServiceService {

  constructor(
    private httpService: HttpServiceService,
  ) { }

  saveSystem(system: System){
    let systems = [];
    if(localStorage.getItem('systems')){
      systems = JSON.parse(localStorage.getItem('systems') as string);
    }
    systems.push(system);
    localStorage.setItem('systems', JSON.stringify(systems));
  }

  createSystemId(){
    if(localStorage.getItem('SID')){
      const fetchId = JSON.parse(localStorage.getItem('SID') as string);
      localStorage.setItem('SID', JSON.stringify(+fetchId + 1));
      return +String(localStorage.getItem('SID'));
    } else {
      localStorage.setItem('SID', '101');
      return 101;
    }
  }

  getCityList(url: string){
    return this.httpService.get(url);
  }
}
