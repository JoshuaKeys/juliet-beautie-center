import { Component, Input, OnInit } from '@angular/core';
import { DropDownModel } from '../../models/drop-down.model';

@Component({
  selector: 'app-menu-drop-down',
  templateUrl: './menu-drop-down.component.html',
  styleUrls: ['./menu-drop-down.component.scss']
})
export class MenuDropDownComponent implements OnInit {
  opened = false;
  searchOpened = false;
  @Input() dropdownLabel: string;
  @Input() dropDownItems: DropDownModel[];
  @Input() type: string;
  
  constructor() { }
  onMouseOver() {
    if(this.type === 'list'){
      this.opened = true;
    } else {
      this.searchOpened = true;
    }

  }
  onMouseOut() {
    if(this.type === 'list'){
      this.opened = false
    } else {
      this.searchOpened = false;
    }
  }
  preventPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  ngOnInit(): void {
    console.log(this.searchOpened);
  }

}
