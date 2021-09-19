import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective implements AfterViewInit {

  @Input() src: any;

  constructor(private imageRef: ElementRef) {
  }

  ngAfterViewInit(): void {

    const img = new Image();
    img.onload = () => {
      this.setImage(this.src);
    };
    img.onerror = () => {
      this.setImage('/assets/img/placeholder.png');
    };
    img.src = this.src;
  }

  private setImage(src: string) {
    this.imageRef.nativeElement.setAttribute('src', src);
  }
}
