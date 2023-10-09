import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  favorites: string[] = [];

  constructor(private dataService: ServiceService) {}

  ngOnInit(): void {
    this.favorites = this.dataService.getFavorites();
  }
}
