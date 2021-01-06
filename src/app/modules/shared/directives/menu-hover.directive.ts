import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appMenuHover]'
})
export class MenuHoverDirective implements OnInit {

  @Output('onMouseHOver') onMouseHover: EventEmitter<undefined>;

  @HostListener('mouseover')
  onMouseOver() {
    this.onMouseHover.emit();
  }
  ngOnInit() {
    this.onMouseHover = new EventEmitter();
  }
  constructor() { }

}
