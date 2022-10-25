import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { GroupPipe } from './pipes/group.pipe';
@NgModule({
  declarations: [
    ErrorDialogComponent,
    GroupPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    GroupPipe,
    MatFormFieldModule
  ]
})
export class SharedModule { }
