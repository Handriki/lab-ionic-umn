import { Injectable } from '@angular/core';
import { Ukm } from './umn-ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UmnUkmService {

  private _ukm: Ukm[] = [
    new Ukm('ukm1', 'Basket', 'Basket adalah UKM blabla blabla...'),
    new Ukm('ukm2', 'Katak', 'Katak adalah UKM blabla blabla...'),
    new Ukm('ukm3', 'Volly', 'Volly adalah UKM blabla blabla...'),
    new Ukm('ukm4', 'Futsal', 'Futsal adalah UKM blabla blabla...'),
    new Ukm('ukm5', 'Sonora', 'Sonora adalah UKM blabla blabla...'),
  ];

  private myUkms: Ukm[] = [];

  constructor() { }
  
  addToMyUkms(ukm: Ukm){
    this.myUkms.push(ukm);
  }

  removeFromMyUkms(id: string){
    this.myUkms = this.myUkms.filter(ukm => {
      return ukm.id !== id;
    })
  }

  getMyUkms(){
    return[...this.myUkms];
  }

  get Ukm(){
    return [...this._ukm];
  }
}
