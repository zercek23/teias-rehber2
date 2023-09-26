import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Teiaş Rehber';

  addItem(newItem: string) {
    console.log('name:', newItem)
  }
}
