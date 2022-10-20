import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
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
    GroupPipe
  ]
})
export class SharedModule { }
