import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantItemComponent } from './components/plant-item/plant-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { FormsModule } from '@angular/forms';
import { RoundupPipe } from './components/extensions/roundup.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    PlantsComponent,
    PlantItemComponent,
    AddPlantComponent,
    RoundupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
