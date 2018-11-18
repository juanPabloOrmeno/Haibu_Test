import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URL_SERVICIO } from '../../config/url.servicios';




@Injectable()
export class UsuarioService {


  listaUsuarios:any[] = [];
  items: any = [];

  constructor(public http: Http) {
    this.cargarListaUsuarios("1");
  }

  cargarListaUsuarios(filtro: string){
    this.listaUsuarios = [];
    let url =  URL_SERVICIO;

    this.http.get( url )
                .map( resp => resp.json() )
                .subscribe( data =>{

                  this.listaUsuarios = data.filter(item => item.activo == filtro);
                  this.items = data.filter(item => item.activo == filtro);
              })
  }


  



  filtroUsuario(ev: any) {
   
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
