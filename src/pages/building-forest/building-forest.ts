import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-building-forest',
  templateUrl: 'building-forest.html'
})
export class BuildingForestPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BuildingForestPage Page');
  }

}
