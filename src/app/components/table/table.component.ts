import { Component, Input } from '@angular/core';
import { Kullanici } from '../../common/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['adi', 'soyad', 'baskanlikAdi', 'mudurlukadi', 'unvan', 'blok', 'kat', 'oda', 'dahili', 'hariciTelefon1', 'fax'];
  @Input() dataSource: Kullanici[] = [];

  constructor() { }

  ngOnInit() {
  }
}
