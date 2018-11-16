import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URL_SERVICIO } from '../../config/url.servicios';




@Injectable()
export class UsuarioService {


  listaUsuarios:any[] = [];
  items: any = [];

  constructor(public http: Http) {
    this.cargarListaUsuarios();
  }

  cargarListaUsuarios(){
    this.listaUsuarios = [];
    let url =  URL_SERVICIO;

    this.http.get( url )
                .map( resp => resp.json() )
                .subscribe( data =>{
                  console.log( data );
                  this.listaUsuarios.push( ...data);
                  this.items.push( ...data);
              })
  }

  



  getItems(ev: any) {
   
    this.items = [];
    this.items = this.listaUsuarios;

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.listaUsuarios.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
