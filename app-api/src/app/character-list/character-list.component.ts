import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppApiService } from '../services/app-api.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [AppApiService]
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickAndMortyService: AppApiService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }
}
