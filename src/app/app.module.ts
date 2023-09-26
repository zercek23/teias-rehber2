import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RehberSecimComponent } from './screens/rehber-secim/rehber-secim.component';
import { TelefonRehberiComponent } from './screens/telefon-rehberi/telefon-rehberi.component';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from './directives/unless.directive';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RehberSecimComponent,
    TelefonRehberiComponent,
    TableFilterComponent,
    TableComponent,
    UnlessDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
