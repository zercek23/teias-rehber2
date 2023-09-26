import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = "";
  @Output() newItemEvent = new EventEmitter<string>();
  name: string = "Burak Bayram";

  ngOnInit():void {
    console.log('hello')
    this.newItemEvent.emit(this.name);

  }

}
