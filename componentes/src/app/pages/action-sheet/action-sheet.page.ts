import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      backdropDismiss: false,

      //subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () =>{
            console.log("Deleted")
          },
          data: {
            action: 'delete',
          },
        },
        {
          handler: () =>{
            console.log("Sharing")
          },
          text: 'Share',
          icon: 'share',
          data: {
            action: 'share',
          },
        },
        {
          handler: () =>{
            console.log("Favorite")
          },
          text: 'Favorite',
          icon: 'bookmarks',
          data: {
            action: 'share',
          },
        },
        

        {
          handler: () =>{
            console.log("Canceled")
          },
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();

   
  }
  

}
