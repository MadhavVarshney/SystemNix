import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { System } from 'src/app/modal/System';
import { SystemServiceService } from 'src/app/services/system-service.service';
import { ISystemBase } from '../../../modal/ISystem.interface';
;
@Component({
  selector: 'app-add-system',
  templateUrl: './add-system.component.html',
  styleUrls: ['./add-system.component.scss']
})
export class AddSystemComponent implements OnInit {

  @ViewChild('staticTabs') staticTabs?: TabsetComponent;
  addSystemForm: FormGroup = this._fb.group({});
  previewSystemCard: ISystemBase = {
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
  };
  brandUpdate: any;
  processorUpdate: any;
  ramUpdate: any;
  displayUpdate: any;
  newOldUpdate: any;
  priceUpdate: any;
  processorBrandUpdate: any;
  typeUpdate: any;
  imageUpdate: any;
  isNextButtonClicked: boolean = false;
  system = new System();

  constructor(
    private _fb: FormBuilder,
    private systemService: SystemServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.updateCardPreview();
  }

  //Form creation//////////////////////////
  createFormControls(){
    this.addSystemForm = this._fb.group({
      basicInfo: this._fb.group({
        newOld: ['', [Validators.required]],
        brand: ['', [Validators.required]],
        type: ['', [Validators.required]],
        yearsUsed: ['', [Validators.required]],
        price: ['', [Validators.required]]
      }),
      systemSpecs: this._fb.group({
        processor: ['', [Validators.required]],
        processorBrand: ['', [Validators.required]],
        processorGen: ['', [Validators.required]],
        ram: ['', [Validators.required]],
        display: ['', [Validators.required]],
        graphicsType: ['', [Validators.required]],
        graphics: ['', [Validators.required]],
        storageType: ['', [Validators.required]],
        storage: ['', [Validators.required]]
      }),
      sellerDetails: this._fb.group({
        sellerName: ['', [Validators.required]],
        sellerEmail: ['', [Validators.required, Validators.email]],
        sellerPhone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        sellerAdd: ['', [Validators.required]]
     }),
      photos: this._fb.group({
        photo: ['']
     })
    });
  }
  ///////////////////////////////////

  //Getter methods//////////////////////////
  get basicInfo(){
    return this.addSystemForm.get('basicInfo') as FormGroup;
  }

  get systemSpecs(){
    return this.addSystemForm.get('systemSpecs') as FormGroup;
  }

  get sellerDetails(){
    return this.addSystemForm.get('sellerDetails') as FormGroup;
  }

  get photosGroup(){
    return this.addSystemForm.get('photos') as FormGroup;
  }


  get photos(){
    return this.photosGroup.get('photos');
  }

  get brand(){
    return this.basicInfo.get('brand');
  }

  get newOld(){
    return this.basicInfo.get('newOld');
  }

  get type(){
    return this.basicInfo.get('type');
  }

  get yearsUsed(){
    return this.basicInfo.get('yearsUsed');
  }

  get price(){
    return this.basicInfo.get('price');
  }

  get processor(){
    return this.systemSpecs.get('processor');
  }

  get processorBrand(){
    return this.systemSpecs.get('processorBrand');
  }

  get processorGen(){
    return this.systemSpecs.get('processorGen');
  }

  get ram(){
    return this.systemSpecs.get('ram');
  }

  get display(){
    return this.systemSpecs.get('display');
  }

  get graphics(){
    return this.systemSpecs.get('graphics');
  }

  get storageType(){
    return this.systemSpecs.get('storageType');
  }

  get storage(){
    return this.systemSpecs.get('storage');
  }

  get graphicsType(){
    return this.systemSpecs.get('graphicsType');
  }

  get sellerName(){
    return this.sellerDetails.get('sellerName');
  }

  get sellerEmail(){
    return this.sellerDetails.get('sellerEmail');
  }

  get sellerPhone(){
    return this.sellerDetails.get('sellerPhone');
  }

  get sellerAdd(){
    return this.sellerDetails.get('sellerAdd');
  }
  /////////////////////////////////////

  //Update Card preview /////////////////////////////
  updateCardPreview(){
    this.brandUpdate = this.addSystemForm.get('basicInfo.brand')?.valueChanges.subscribe(data => {
      this.previewSystemCard.brand = data;
    });

    this.processorUpdate = this.addSystemForm.get('systemSpecs.processor')?.valueChanges.subscribe(data => {
      this.previewSystemCard.processor = data;
    });

    this.processorBrandUpdate = this.addSystemForm.get('systemSpecs.processorBrand')?.valueChanges.subscribe(data => {
      this.previewSystemCard.processorBrand = data;
    });

    this.priceUpdate = this.addSystemForm.get('basicInfo.price')?.valueChanges.subscribe(data => {
      this.previewSystemCard.price = data;
    });

    this.ramUpdate = this.addSystemForm.get('systemSpecs.ram')?.valueChanges.subscribe(data => {
      this.previewSystemCard.ram = data;
    });

    this.typeUpdate = this.addSystemForm.get('basicInfo.type')?.valueChanges.subscribe(data => {
      this.previewSystemCard.type = data;
    });

    this.imageUpdate = this.addSystemForm.get('photos.photo')?.valueChanges.subscribe(data => {
      this.previewSystemCard.image = data;
    });

    this.newOldUpdate = this.addSystemForm.get('basicInfo.newOld')?.valueChanges.subscribe(data => {
      this.previewSystemCard.newOld = data;
    });

    this.displayUpdate = this.addSystemForm.get('systemSpecs.display')?.valueChanges.subscribe(data => {
      this.previewSystemCard.display = data;
    });
  }
  ///////////////////////////////////

  nextTab(tabId: number){
    this.isNextButtonClicked = true;
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  formSubmit(){
    this.isNextButtonClicked = true;
    if (this.staticTabs?.tabs) {
      if(this.basicInfo.invalid){
        this.staticTabs.tabs[0].active = true;
        return
      }

      if(this.systemSpecs.invalid){
        this.staticTabs.tabs[1].active = true;
        return
      }

      if(this.sellerDetails.invalid){
        this.staticTabs.tabs[2].active = true;
        return
      }
    }
    this.mapData();
    this.systemService.saveSystem(this.system);
    if(this.newOld?.value == 1){
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/old-system']);
    }
  }

  mapData(){
    this.system.sysId = this.systemService.createSystemId();
    this.system.brand = this.brand?.value;
    this.system.display = +this.display?.value;
    this.system.graphics = this.graphics?.value;
    this.system.graphicsType = +this.graphicsType?.value;
    this.system.newOld = +this.newOld?.value;
    this.system.price = +this.price?.value;
    this.system.processor = this.processor?.value;
    this.system.processorBrand = this.processorBrand?.value;
    this.system.processorGen = +this.processorGen?.value;
    this.system.ram = +this.ram?.value;
    this.system.sellerAdd = this.sellerAdd?.value;
    this.system.sellerEmail = this.sellerEmail?.value;
    this.system.sellerName = this.sellerName?.value;
    this.system.sellerPhone = this.sellerPhone?.value;
    this.system.storage = +this.storage?.value;
    this.system.storageType = +this.storageType?.value;
    this.system.type = +this.type?.value;
    this.system.yearsUsed = +this.yearsUsed?.value;
  }
}
