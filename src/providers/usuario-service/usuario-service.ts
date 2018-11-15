import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URL_SERVICIO } from '../../config/url.servicios';




@Injectable()
export class UsuarioService {


  listaUsuarios:any[] = [];

  constructor(public http: Http) {
    this.cargarListaUsuarios();
  }

  cargarListaUsuarios(){
    let url =  URL_SERVICIO;

    this.http.get( url )
                .map( resp => resp.json() )
                .subscribe( data =>{
                  console.log( data );
                  this.listaUsuarios.push( ...data);
              })
  }
}
