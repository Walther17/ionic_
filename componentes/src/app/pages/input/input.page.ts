import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {


  nombre: any ;

  usuario = {
    email: '',
    password: '',
  };

  onSubmitTemplate(){
    console.log('Formulario submit')
    console.log(this.usuario)
  }

  constructor() { }

  ngOnInit() {
  }

}
