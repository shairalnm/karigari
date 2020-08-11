import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedFeature = 'jewelry';

  constructor(private dataStorageService: DataStorageService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    this.dataStorageService.fetchJewelry().subscribe();
  }
  ngOnDestroy() {
    this.dataStorageService.storeJewelry();
  }
}
