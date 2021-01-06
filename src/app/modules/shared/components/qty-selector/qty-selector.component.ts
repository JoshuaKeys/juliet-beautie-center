import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qty-selector',
  templateUrl: './qty-selector.component.html',
  styleUrls: ['./qty-selector.component.scss']
})
export class QtySelectorComponent implements OnInit {
  @Input() qty: number
  constructor() { }

  ngOnInit(): void {
  }

}
