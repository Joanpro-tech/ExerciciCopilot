import { Component, OnInit } from '@angular/core';
import { AppApiService } from '../services/app-api.service';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
   characters: any[] = [];

   import { Component, OnInit } from '@angular/core';
   import { AppApiService } from '../services/app-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
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
}
