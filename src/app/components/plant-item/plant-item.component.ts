import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from 'src/app/Plant';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant-item',
  templateUrl: './plant-item.component.html',
  styleUrls: ['./plant-item.component.css']
})
export class PlantItemComponent implements OnInit {
  @Input() thisPlant!: Plant;
  @Output() onDeletePlant: EventEmitter<Plant> = new EventEmitter();
  @Output() onToggleHighlight: EventEmitter<Plant> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(thisPlant: Plant) {
    this.onDeletePlant.emit(thisPlant);
  }

  onToggle(thisPlant: Plant) {
    this.onToggleHighlight.emit(thisPlant);
  }

}
