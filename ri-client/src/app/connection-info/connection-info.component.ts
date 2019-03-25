import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-connection-info',
  templateUrl: './connection-info.component.html',
  styleUrls: ['./connection-info.component.sass'],
})
export class ConnectionInfoComponent implements ICellRendererAngularComp {
  icon: string;

  constructor() {}

  refresh(params: any): boolean {
    switch (params.value) {
      case 'sameGeoInfo':
        this.icon = 'assets/globe.png';
        return true;
      case 'sameEmail':
        this.icon = 'assets/mail.png';
        return true;
      case 'sameName':
        this.icon = 'assets/cursiveS.jpg';
        return true;
      case 'samePhoneNumber':
        this.icon = 'assets/phone.png';
        return true;
      case 'sameDeviceToken':
        this.icon = 'assets/token.png';
        return true;
      case 'sameDevice':
        this.icon = 'assets/device.png';
        return true;
      default:
        this.icon = 'http://placehold.it/20x20';
        return true;
    }
  }

  agInit(params: any) {
    console.log(params);
    switch (params.value) {
      case 'sameGeoInfo':
        this.icon = 'assets/globe.png';
        break;
      case 'sameEmail':
        this.icon = 'assets/mail.png';
        break;
      case 'sameName':
        this.icon = 'assets/cursiveS.jpg';
        break;
      case 'samePhoneNumber':
        this.icon = 'assets/phone.png';
        break;
      case 'sameDeviceToken':
        this.icon = 'assets/token.png';
        break;
      case 'sameDevice':
        this.icon = 'assets/device.png';
        break;
      default:
        this.icon = 'http://placehold.it/20x20';
    }
  }
}
