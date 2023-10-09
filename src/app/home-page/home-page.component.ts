import { Component, OnInit } from '@angular/core';
import { Model } from '../_model/model';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  data: Model[] = [];
  filteredData: Model[] = [];
  filterText = '';
  favorites: string[] = [];

  constructor(private dataService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.dataService.generateData();
    this.filteredData = this.data;

  }

  applyFilter(): void {
    this.filteredData = this.data.filter(item =>
      item.author.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  applyFilter2(): void {
    this.filteredData = this.data.filter(item =>
      item.author.toLowerCase().includes(this.filterText.toLowerCase()) ||
      item.text.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
  

  toggleFavorite(id: string): void {
    this.dataService.toggleFavorite(id);
    this.favorites = this.dataService.getFavorites();
  }
  
  
  viewFavorites(): void {
    this.router.navigate(['/fav']);
  }
}
