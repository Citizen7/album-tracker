import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/Plant';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { RoundupPipe } from '../extensions/roundup.pipe';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  leftArrow = faChevronLeft;
  rightArrow = faChevronRight;
  limit: number = 5;
  start: number = 0;
  end: number = this.limit;

  thisPage: number = 1;

  plants: Plant[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe((plants) => this.plants = plants);
  }

  deletePlant(thisPlant: Plant) {
    this.plantService
      .deletePlant(thisPlant)
      .subscribe(
        () => this.plants = this.plants.filter(x => x.id !== thisPlant.id)
      );
  }

  toggleHighlight(thisPlant: Plant) {
    thisPlant.highlight = !thisPlant.highlight;
    this.plantService.updatePlantHighlight(thisPlant).subscribe();
  }

  addPlant(thisPlant: Plant) {
    this.plantService.addPlant(thisPlant).subscribe((thisPlant) => (this.plants.push(thisPlant)));
  }

  onLess(startIndex: number, limit: number): void {
    // Check the results.
    let x = startIndex - limit;
    // If there are enough results, scroll backwards according to the limit.
    if (x > 0)
    {
      this.start = x;
      this.end = this.end - limit;
      this.thisPage = this.thisPage - 1;
    }
    // Otherwise, reset to the starting position.
    else
    {
      this.start = 0;
      this.end = limit;
      this.thisPage = 1;
    }
    //TODO: remove this logging
    console.log("Start: " + this.start + " End: " + this.end);
  }
  
  onMore(startIndex: number, limit: number): void {        
    // Advance the indexes according to the limit.
    this.start = startIndex + limit;
    this.end = this.end + limit;
    // advance the page number
    this.thisPage = this.thisPage + 1;
    //TODO: remove this logging
    console.log("Start: " + this.start + " End: " + this.end);
  }

}
