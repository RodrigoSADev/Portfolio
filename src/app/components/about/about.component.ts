import { Component } from '@angular/core';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';

@Component({
  selector: 'app-about',
  imports: [ExperiencesComponent, EducationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
