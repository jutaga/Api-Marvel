import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { LogoComponent } from './logo/logo.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    LogoComponent,
    ResultadoComponent
  ],
  exports: [
    LogoComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class MainMarvelModule { }
