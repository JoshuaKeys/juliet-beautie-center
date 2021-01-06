import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.scss']
})
export class SideFilterComponent implements OnInit {
  @Input() isOpened: boolean;
  @Output() closeMenu: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // this.closeMenu = new EventEmitter();
  }
  close() {
    this.closeMenu.emit();
  }
}
