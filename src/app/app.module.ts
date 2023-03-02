import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CarPrefFormComponent } from './components/car-pref-form/car-pref-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewUserServiceService } from './services/new-user-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PieChartsComponent } from './components/pie-charts/pie-charts.component';
import { PieBySeatsComponent } from './components/pie-by-seats/pie-by-seats.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    CarPrefFormComponent,
    DashboardComponent,
    BarGraphComponent,
    PieChartsComponent,
    PieBySeatsComponent,
    CountriesTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule

    
    

  ],
  providers: [NewUserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
