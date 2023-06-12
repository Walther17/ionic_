import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';


@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {


  personajes = ['Spiderman', 'Iroman', 'Thor', 'Sherk', 'Goku', 'Vegueta'];

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively

    // Las propiedades `from` y `to` contienen el índice del elemento
    // cuándo comenzó y terminó el arrastre, respectivamente
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    

    // Terminar el reordenamiento y posicionar el artículo en el DOM basado en
    // donde terminó el gesto. Este método también se puede llamar directamente
    // por el grupo de reorden

    ev.detail.complete();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
