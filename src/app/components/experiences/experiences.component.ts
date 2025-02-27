import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-experiences',
  imports: [TranslateModule, ScrollAnimationDirective],
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
