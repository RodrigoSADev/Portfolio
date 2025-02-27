import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  @Input('appScrollAnimation') animationClass: string = 'animeUp';
  isVisible = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    this.isVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    if (this.isVisible) {
      element.classList.add(this.animationClass);
    } else {
      element.classList.remove(this.animationClass);
    }
  }
}
