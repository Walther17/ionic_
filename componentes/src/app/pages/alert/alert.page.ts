import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


   titulo = "";
  ngOnInit() {
  }

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Google Play Store',
      subHeader: '1 aplicación actualizada',
      message: 'Clash Royale se actualizó correctamente',
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Canceled")
          },

        },
        {

          text: 'Ok',
          handler: () => {
            console.log("Ok")
          },
        }
      ],
    });

    await alert.present();
  }

  async presentInput() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Canceled")
          },

        },
        {

          text: 'Ok',
          handler: ( data) => {
            console.log("Ok" + data)
            this.titulo = data.txtNombre;
          },
        }
      ],
      inputs: [
        {
          placeholder: 'Name',
          name: 'txtNombre',
          type: 'text',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],

    });
    

    await alert.present();
    /*
        Una función async puede contener una expresión await , la cual pausa la ejecución de la función asíncrona
        y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
    */

  }
}
