import { ISystemBase } from "./ISystem.interface";

export class System implements ISystemBase{
  sysId: number;
  brand: string;
  type: number;
  processorBrand: string;
  newOld: number;
  processor: string;
  processorGen: number;
  ram: number;
  display: number;
  price: number;
  image: string;
  yearsUsed: number;
  graphicsType: number;
  graphics: string;
  storageType: number;
  storage: number;
  sellerName: string;
  sellerEmail: string;
  sellerPhone: string;
  sellerAdd: string;
}
