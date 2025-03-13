import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DownloadCvComponent } from '../../features/download-cv/download-cv.component';

@Component({
  selector: 'app-home',
  imports: [DownloadCvComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  elementRef = inject(ElementRef);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY === 0) {
      this.addEffectInClass();
    }
  }

  addEffectInClass() {
    const element = this.elementRef.nativeElement.querySelector('.container');
    element.classList.remove('zoom');
    void element.offsetWidth;
    element.classList.add('zoom');
  }
}
