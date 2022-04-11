import { Component, Input, OnInit } from '@angular/core';
import { ISystemBase } from '../../../modal/ISystem.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() system: ISystemBase;
  @Input() hideIcons: boolean = false;
  type: string;

  constructor() {
    this.system = {
      sysId: 0,
      brand: '',
      type: 0,
      processorBrand: '',
      newOld: 0,
      processor: '',
      ram: 0,
      display: 0,
      price: 0,
      image: ''
    }
  }

  ngOnInit(): void {
    if(this.system.type == 1){
      this.type = "Desktop"
    } else if(this.system.type == 2){
      this.type = "Business Laptop"
    } else {
      this.type = "Gaming Laptop"
    }
  }

}
