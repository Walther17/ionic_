import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {



  @ViewChild('lista')
  lista!: IonList;
  
  usuarios: any = Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.usuarios =  this.dataService.getUsers()
  }


  favorite (i: any){
    console.log('favorite', i)
    this.lista.closeSlidingItems(); // al dar click en el icon el efecto del sliding desaparece

  }

  delete (i: any){
    console.log('delete', i)
    this.lista.closeSlidingItems();
  }

}
