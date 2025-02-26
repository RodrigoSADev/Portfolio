import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  imports: [TranslateModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  metasixStack = [
    'Angular',
    'RxJS',
    'TypeScript',
    'Angular Material',
    'Bootstrap',
    'Sass',
    'NgRx',
    'Jest',
    'Cypress',
    'Playwright',
    'Java',
    'Spring Boot',
  ];

  vanzoliniStack = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'];
}
