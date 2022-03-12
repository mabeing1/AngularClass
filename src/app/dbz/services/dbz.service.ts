import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
        constructor() {
                console.log('Servicio Inicializado');                
        }

        private _personajes: Personaje[] =[
                {nombre: 'Goku', poder: 150000},
                {nombre: 'vegeta', poder: 120000}
        ];

        get personajes(): Personaje[]{
                return [...this._personajes];
        }

        agregarPersonaje(peronsaje: Personaje){
                this._personajes.push(peronsaje);
        }

}