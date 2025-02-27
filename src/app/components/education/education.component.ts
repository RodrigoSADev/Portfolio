import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-education',
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {}
