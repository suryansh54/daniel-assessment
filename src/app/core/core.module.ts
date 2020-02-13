import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [AppComponent]
})
export class CoreModule { }
