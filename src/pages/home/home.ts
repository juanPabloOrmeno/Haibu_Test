import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario-service/usuario-service';
import { DetallePage } from '../detalle/detalle';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categoriaPage = DetallePage;

  usuariosActivos: boolean = true;
  

  constructor(public navCtrl: NavController, public usuService: UsuarioService) {

  }

  verTipoUsuario(){
    if(this.usuariosActivos){
      this.usuService.cargarListaUsuarios("1");
      
    }
    else{
      this.usuService.cargarListaUsuarios("0");
      
    }
  }

}
