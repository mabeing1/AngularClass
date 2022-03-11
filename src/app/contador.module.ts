import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
        declarations: [  //se llama los componentes del modulo
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule{}