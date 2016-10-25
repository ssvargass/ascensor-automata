import { 
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate 
} from '@angular/core';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'ascensor',
  templateUrl: 'ascensor.component.html'
})

export class AscensorComponent {
  pisos: number;
  pisosArr: any[];
  pisoActual: number;
  destinos: any[];
  close:boolean;
  
  constructor(){
    this.pisos = 4;
    this.setPisos();
    this.pisoActual = 3;
    this.destinos = Array();
    this.close = false;
  }

  setPisos(){
    this.pisosArr = Array.apply(null, {length: this.pisos}).map(function (x:any, i:any) { return i });
  }

  cambiarNivel(dir:string, piso:number){
    this.closeGates();
    this.runDestiny(piso);
  }

  setDestino(piso:number){
    let nwp = this.pisos - piso -1; 
    this.closeGates();
    this.runDestiny(nwp);
  }

  closeGates(){
    this.close = true;
  }

  runDestiny(piso:number){
    this.pisoActual = piso;
    jQuery('.ascensor').animate({
      top: 12*piso + 'em',
    }, 1000, () => this.close = false );
  }

}
