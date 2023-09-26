import { Component, EventEmitter, Output } from '@angular/core';

export interface SelectInput {
  value: string;
  text: string;
}

export interface State {
  baskan: string;
  mudur: string;
  ad: string;
  soyad: string;
  dahili: string;
  kat: string;
  oda: string;
}

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css'],
})
export class TableFilterComponent {
  state: State = {
    baskan: '',
    mudur: '',
    ad: '',
    soyad: '',
    dahili: '',
    kat: '',
    oda: '',
  };

  @Output() buttonClicked = new EventEmitter<State>();

  onStateChanged(event: string) {
    // console.log('state:', this.state);
  }

  onAraButtonClick() {
    this.buttonClicked.emit(this.state)
  }

  baskanlik: SelectInput[] = [
    { value: 'a', text: 'A Başkanlık' },
    { value: 'b', text: 'B Başkanlık' },
    { value: 'c', text: 'C Başkanlık' },
  ];

  mudurluk: SelectInput[] = [
    { value: 'a', text: 'A Müdürlük' },
    { value: 'b', text: 'B Müdürlük' },
    { value: 'c', text: 'C Müdürlük' },
  ];
}
