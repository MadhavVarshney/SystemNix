import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/modal/enums';
import { System } from 'src/app/modal/System';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ISystemBase } from '../../../modal/ISystem.interface';

import { HttpClient } from '@angular/common/http';
import { AllConfirmationService } from 'src/app/services/all-confirmation.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  systems: Array<ISystemBase> = [];
  listManipultor: FormGroup;
  filterValue: string = '';
  sortValue: string = '';
  sortOrder: string = 'asc';

  constructor(
    private httpService: HttpServiceService,
    private activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private allConfirmService: AllConfirmationService
  ) {

   }

  ngOnInit(): void {
    this.createForm();
    // this.getData();
    this.getListing();
  }

  get filter(){
    return this.listManipultor.controls['filter'];
  }

  get sort(){
    return this.listManipultor.controls['sort'];
  }


  createForm(){
    this.listManipultor = this._fb.group({
      filter: [''],
      sort: ['']
    });
  }

  // getData(){
  //   this.http.get('data/systems.json').subscribe(data => {
  //     this.systems = data
  //     let newSystem = JSON.parse(localStorage.getItem('systems') as string);
  //     if(newSystem){
  //       newSystem.forEach((element: System) => {
  //         element.type = element.type;
  //         this.systems.push(element);
  //       });
  //     }
  //     if(this.activatedRoute.snapshot.url.toString()){
  //       this.systems = this.systems.filter(x => x.newOld == 2);
  //     } else {
  //       this.systems = this.systems.filter(x => x.newOld == 1);
  //     }
  //   }, error => {
  //     console.log(error);
  //   });

  //   this.http.get(environment.apiURL + "ComputerList/getComputerList").subscribe(data => {

  //   });
  //   this.http.get(environment.apiURL + "ComputerList/detPage/2").subscribe(data => {

  //   });
  // }

  onFilterSearch(){
    this.filterValue = this.filter.value;
  }

  onClearSearch(){
    this.filterValue = '';
    this.filter.setValue('');
  }

  onSort(){
    this.sortValue = this.sort.value;
  }

  onSortOrder(){
    if(this.sortOrder === 'asc'){
      this.sortOrder = 'desc';
    } else {
      this.sortOrder = 'asc';
    }
  }

  getListing(){
    this.allConfirmService.getOrderListing().subscribe((data: any) => {
      console.log(data);
    });

  }

}
