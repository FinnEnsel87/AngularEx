import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/hero';

@Component({
  selector: 'prj-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() cardSingle!: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
