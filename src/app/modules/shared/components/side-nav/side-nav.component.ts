import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
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
