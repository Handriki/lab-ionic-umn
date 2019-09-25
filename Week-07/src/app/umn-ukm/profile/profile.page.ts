import { Component, OnInit, Input } from '@angular/core';
import { UmnUkmService } from '../umn-ukm.service';
import { Ukm } from '../umn-ukm.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadedMyUkm: Ukm[];

  constructor(private ukmService: UmnUkmService) { }

  ngOnInit() {
    this.loadedMyUkm = this.ukmService.getMyUkms();  
  }
  ionViewWillEnter() {
    this.loadedMyUkm = this.ukmService.getMyUkms();  
  }

  removeUkm(ukmId: string){
    console.log("remove");
    this.ukmService.removeFromMyUkms(ukmId);
    this.ionViewWillEnter();
  }
}
