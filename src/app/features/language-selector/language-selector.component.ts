import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  translateService = inject(TranslateService);

  currentLanguage = this.translateService.currentLang || 'pt';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.translateService.use(this.currentLanguage);
  }
}
