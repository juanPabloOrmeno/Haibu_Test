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
  

  comuna: any;
  rut:any;
  fechaNac:any;
  telefono: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public validar: ValidarServiceProvider) {
    
    this.usuario = this.navParams.get("usuarios");

    //validaciones


    //comuna
    validar.getComuna(this.usuario)
            .then(comuna => this.comuna = comuna)
            .catch(err => console.log(err) );


    //rut
    this.rut = validar.Rut(this.usuario.rut);
    if(validar.Rut(this.usuario.rut)){
      this.usuario.rut = this.validar.formateaRut(this.usuario.rut);
    }

    //fecha nacimiento
    validar.getFecha(this.usuario.fechaNacimiento)
            .then(fecha => this.fechaNac = fecha)
            .catch(err => this.fechaNac = err);


    //telefono
    this.telefono = validar.transformPhono(this.usuario.telefono);
  }

  
}
