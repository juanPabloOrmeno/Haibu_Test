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

  rut:any;
  fechaNac:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public validar: ValidarServiceProvider) {
    console.log(navParams.get("usuarios"))
    this.usuario = this.navParams.get("usuarios");
    //this.usuario.rut = (validar.checkRut(this.usuario.rut));


    this.rut = validar.Rut(this.usuario.rut);
    if(validar.Rut(this.usuario.rut)){
      this.usuario.rut = this.validar.formateaRut(this.usuario.rut);
    }

    
    this.fechaNac = validar.validarFecha(this.usuario.fechaNacimiento);
    
    

  }
}
