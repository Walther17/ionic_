import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: false,
    },
    {
      name: 'tertiary',
      selected: true,
    },
    {
      name: 'success',
      selected: true,
    }
  ];

  
  constructor() { }

  ngOnInit() {
  }

  onClick(check: any) {
    console.log( check );
  }

 
}
