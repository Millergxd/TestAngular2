import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputValue = '';
  input =[];
  aux = 0;
  hola=0;
  cambioDeValor(a){
    console.log(a);
    console.log(this.inputValue);
  };
  clicked (e){
    //console.log("Presiono boton");
    this.input[this.aux++]=this.inputValue;
    this.inputValue='';
    /*for (var i = 0; i < this.input.length; i++) {
      console.log(this.input[i]);
    }
    console.log("*---------------------------*");*/
  };
  clicked2 (e){
    var x;
    console.log("Boton borrar "+this.inputValue);
    //this.input.splice(1,1);
    for (var i = 0; i <this.input.length; i++) {
      x= this.inputValue.localeCompare(this.input[i]);
      if (x===0) {
        this.input.splice(i,1);
      }      
    }
    this.inputValue='';
  };
  print(e){
    for (var i = 0; i < this.input.length; i++) {
      console.log(this.input[i]);
    }
    console.log("finish of vector --------------*");
    console .log("hola");
  };
}

