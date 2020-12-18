import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitan America';  
  nombre2 = 'vicTOR PINEdo martINEZ';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 3700000;  
  fecha = new Date();

  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/ahCwqrYpIuM';
  
  activar = true;

  valorPromesa = new Promise <string>( (resolve) => {

    setTimeout( () =>{
      resolve('llegó la data');
    }, 4500);

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
