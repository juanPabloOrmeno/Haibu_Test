import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidarServiceProvider } from '../../providers/validar-service/validar-service';



@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  usuario:any = {};
  direccion:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public validar: ValidarServiceProvider) {
    console.log(navParams.get("usuarios"))
    this.usuario = this.navParams.get("usuarios");
    this.usuario.rut = (validar.checkRut(this.usuario.rut));
    
  }
}
