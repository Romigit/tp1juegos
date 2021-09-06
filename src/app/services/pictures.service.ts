import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Picture } from '../models/picture';


@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) {}

  getPictures(){
                      //obtengo un vector de fotos
    return this.http.get<Picture[]>('https://jsonplaceholder.typicode.com/photos?_limit=5'); //obtengo los datos y lo que espero de está petición get es un arreglo de pictures
  }

}
