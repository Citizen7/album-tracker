import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Plant Tracker';
  showAddPlant: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPlant = value);
  }

  ngOnInit(): void {}

  toggleAddPlant() {
    this.uiService.toggleAddPlant();
  }

}
