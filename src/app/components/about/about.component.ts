import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';

@Component({
  selector: 'app-about',
  imports: [
    ExperiencesComponent,
    EducationComponent,
    TranslateModule,
    ScrollAnimationDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
