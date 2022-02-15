import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Plant } from 'src/app/Plant';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();

  plantName?: string;
  quantity: number = 0;
  purchasedDate?: string;
  plantedDate?: string;
  showAddPlant: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPlant = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
     // Basic Validation
     if (!this.plantName) {
      alert('You must add a plant.');
      return;
    }
    if (this.quantity === 0)
    {
      alert('You must set the quantity.');
    }    
    if (!this.purchasedDate) {
      this.purchasedDate = formatDate(new Date(), 'MM/dd/yyy', 'en');
    }
    if (!this.plantedDate) {
      this.plantedDate = formatDate(new Date(), 'MM/dd/yyy', 'en');
    }

    const newPlant = {
      plant: this.plantName,
      quantity: this.quantity,
      purchasedDate: this.purchasedDate,
      plantedDate: this.plantedDate,
      highlight: false,
      plant_art: null
    }

    this.onAddPlant.emit(newPlant);

    // clear form
    this.plantName = '';
    this.quantity = 0;
    this.purchasedDate = '';
    this.plantedDate = '';
  }

}
