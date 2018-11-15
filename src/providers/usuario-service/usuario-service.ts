import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

}
