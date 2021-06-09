import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [MatSliderModule, MatIconModule, MatListModule, MatSelectModule, MatProgressBarModule, MatCardModule, MatTabsModule, MatExpansionModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule, MatTreeModule, MatButtonModule, MatGridListModule, MatNativeDateModule, MatInputModule, MatToolbarModule],
  exports: [MatSliderModule, MatIconModule, MatListModule, MatSelectModule, MatProgressBarModule, MatCardModule, MatTabsModule, MatExpansionModule, MatDialogModule, MatDatepickerModule, MatFormFieldModule, MatTreeModule, MatButtonModule, MatGridListModule, MatNativeDateModule, MatInputModule, MatToolbarModule]
})
export class KuikaModule { }