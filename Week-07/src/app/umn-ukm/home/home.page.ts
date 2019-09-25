import { Component, Input } from '@angular/core';
import { Ukm } from '../umn-ukm.model';
import { UmnUkmService } from '../umn-ukm.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadedUkm: Ukm[];

  constructor(private ukmService: UmnUkmService, private alertController:AlertController) {}

  ngOnInit(){
    this.loadedUkm = this.ukmService.Ukm;
  }

  async confirmJoin(ukm : Ukm) {
    const alert = await this.alertController.create({
      message: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Batal');
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.ukmService.addToMyUkms(ukm);
            console.log('Confirm Batal' + ukm.name);
          }
        }
      ]
    });

    await alert.present();
  }
}
