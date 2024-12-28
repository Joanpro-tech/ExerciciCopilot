import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-keeper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-keeper.component.html',
  styleUrls: ['./date-keeper.component.css']
})
export class DateKeeperComponent implements OnInit {
  currentDate: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
