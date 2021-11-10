import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/hero';

@Component({
  selector: 'prj-hero-single',
  templateUrl: './hero-single.component.html',
  styleUrls: ['./hero-single.component.css']
})
export class HeroSingleComponent implements OnInit {
  @Input() cardSingle!: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
