import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})


export class MaterialModule { }
