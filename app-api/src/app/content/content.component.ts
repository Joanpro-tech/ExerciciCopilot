import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-content',
  imports: [CharacterListComponent, HttpClientModule],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent { }
