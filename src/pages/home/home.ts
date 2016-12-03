import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BuildingMinePage } from '../building-mine/building-mine';
import { BuildingForestPage } from '../building-forest/building-forest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buildingMinePage = BuildingMinePage;
  buildingForestPage = BuildingForestPage;

  constructor(public navCtrl: NavController) {

  }

}
