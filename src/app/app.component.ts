import { Component, OnInit } from '@angular/core';

import {PicturesService} from './services/pictures.service';
import {Picture} from './models/picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  { //es para que cargue de una las fotografías
  title = 'tp1';
  albumsId = [1,2,3];

  constructor(public picturesService: PicturesService){}
  

}
