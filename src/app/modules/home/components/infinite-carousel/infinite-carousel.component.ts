import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrls: ['./infinite-carousel.component.scss']
})
export class InfiniteCarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('slider') slider: ElementRef<HTMLElement>;
  @ViewChild('prev') prev: ElementRef<HTMLElement>;
  @ViewChild('next') next: ElementRef<HTMLElement>;
  @ViewChild('container') container: ElementRef<HTMLElement>;
  direction = null;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setInterval(()=> {
      this.onNextClicked();
    }, 5000)
  }
  onDrag(event: MouseEvent) {
    // event.preventDefault();
    console.log(event);
  }

  ngAfterViewInit() {
    this.renderer.listen(this.slider.nativeElement, 'transitionend', () => {
      if (this.direction === -1) {
        this.renderer.appendChild(this.slider.nativeElement, this.slider.nativeElement.firstElementChild);
      } else if (this.direction === 1) {
        this.renderer.insertBefore(this.slider.nativeElement, this.slider.nativeElement.lastElementChild, this.slider.nativeElement.firstElementChild);
      }
      this.renderer.setStyle(this.slider.nativeElement, 'transition', 'none');
      this.renderer.setStyle(this.slider.nativeElement, 'transform', 'translateX(0)');
      setTimeout(() => this.renderer.setStyle(this.slider.nativeElement, 'transition', 'all 0.5s'));
    });
  }
  onPrevClicked() {
    if(this.direction !== 1) {
      this.direction = 1;
      this.renderer.appendChild(this.slider.nativeElement, this.slider.nativeElement.firstElementChild);
    }
    this.renderer.setStyle(this.container.nativeElement, 'justifyContent', 'flex-end');
    this.renderer.setStyle(this.slider.nativeElement, 'transform', 'translateX(50%)');
  }
  onNextClicked() {
    if(this.direction === null) {
      this.direction = -1;
    } else if(this.direction === 1) {
      this.direction = -1;
      this.renderer.insertBefore(this.slider.nativeElement, this.slider.nativeElement.lastElementChild, this.slider.nativeElement.firstElementChild);
    }
    this.renderer.setStyle(this.container.nativeElement, 'justifyContent', 'flex-start');
    this.renderer.setStyle(this.slider.nativeElement, 'transform', 'translateX(-50%)');
  }
}
