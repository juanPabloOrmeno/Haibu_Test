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

  constructor(public navCtrl: NavController, public usuService: UsuarioService) {

  }

}
