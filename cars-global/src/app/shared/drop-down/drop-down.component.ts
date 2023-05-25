import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  isOpened: boolean = false;

  openMenu():void {
    this.isOpened = !this.isOpened
  }
}
