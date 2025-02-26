import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  translateService = inject(TranslateService);

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
