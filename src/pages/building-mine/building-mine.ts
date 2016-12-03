import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-building-mine',
  templateUrl: 'building-mine.html'
})
export class BuildingMinePage {
  stone = 0;

  constructor(public navCtrl: NavController) {}

  pressStoneEvent(e) {
    this.stone++;
  }
}
