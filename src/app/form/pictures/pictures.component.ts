import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture';
import { PicturesService } from '../../services/pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  pictures: Picture[] = [];

  constructor(public picturesService: PicturesService) { }

  //se ejecuta a penas el componenete se carga
  ngOnInit(){
    this.picturesService.getPictures() //traiga los datos de la web
    .subscribe(
      //si funciona la suscripción
      pictures => {
                      //para mostrar en consola los datos
                      console.log(pictures),
                      //para mostrar en una plantilla
                      this.pictures = pictures; //como no reconoce el tipo de dato en this.pictures entonces genero la clase picture. Luego establece que espera pero no sabe que llega
                  },
      //else de la suscripción
      err      => console.log(err)
    )
  }

  click(): void{
    alert('works');
  }

}
