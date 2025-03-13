import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-download-cv',
  imports: [TranslateModule],
  templateUrl: './download-cv.component.html',
  styleUrl: './download-cv.component.scss',
})
export class DownloadCvComponent {
  translateService = inject(TranslateService);

  cvLink = '';

  ngOnInit() {
    this.setCvLink();
    this.translateService.onLangChange.subscribe(() => {
      this.setCvLink();
    });
  }

  setCvLink() {
    const currentLang = this.translateService.currentLang || 'pt';
    this.cvLink =
      currentLang === 'en'
        ? 'assets/cv-rodrigo-en.pdf'
        : 'assets/cv-rodrigo-pt.pdf';
  }
}
