import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { FormDBZComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListDBZComponent,
    FormDBZComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class DbzModule { }
