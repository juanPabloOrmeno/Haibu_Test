import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  usuario:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("usuarios"))
    this.usuario = this.navParams.get("usuarios");
  }

  

}
