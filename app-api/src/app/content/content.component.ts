import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [CharacterListComponent, HttpClientModule],
  templateUrl: './content.component.html',
  standalone: true,
  styleUrl: './content.component.css'
})
export class ContentComponent { 
constructor(private router: Router) { }

  goToDateKeeper() {
    this.router.navigate(['/datekeeper']);
  }
}
