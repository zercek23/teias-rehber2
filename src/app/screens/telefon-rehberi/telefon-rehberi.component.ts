import { Component } from '@angular/core';
import { Kullanici } from '../../common/data';
import { State } from '../../components/table-filter/table-filter.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-telefon-rehberi',
  templateUrl: './telefon-rehberi.component.html',
  styleUrls: ['./telefon-rehberi.component.css']
})
export class TelefonRehberiComponent {
  dataSource: Kullanici[] = [];

  queryData: State = {
    baskan: '',
    mudur: '',
    ad: '',
    soyad: '',
    dahili: '',
    kat: '',
    oda: '',
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.dataSource = data;
    })
  }

  getDataSourceWithQuery(state: State) {
    console.log('state: ', state)
    this.queryData = state
  }
}
