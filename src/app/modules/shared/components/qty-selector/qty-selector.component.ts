import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-qty-selector',
  templateUrl: './qty-selector.component.html',
  styleUrls: ['./qty-selector.component.scss']
})
export class QtySelectorComponent implements OnInit {
  @Input() qty: number
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  decreaseQty() {
    const qty = this.qty;
    if (this.qty > 1) {
      return this.qtyChanged.emit(this.qty - 1)
    }
  }
  increaseQty() {
    return this.qtyChanged.emit(this.qty + 1);
  }
}
