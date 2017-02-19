import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orders: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private af: AngularFire) {
      this.orders = af.database.list('/order');
  }
  
}
