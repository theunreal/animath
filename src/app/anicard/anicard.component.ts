import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anicard',
  templateUrl: './anicard.component.html',
  styleUrls: ['./anicard.component.css']
})
export class AnicardComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
