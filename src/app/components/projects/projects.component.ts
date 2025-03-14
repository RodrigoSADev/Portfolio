import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  imports: [
    CarouselModule,
    CardModule,
    TranslateModule,
    ScrollAnimationDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/projects/task-board.jpg',
      alt: 'Project Task Board',
      name: 'Task Board',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'Angular Material',
        'Jest',
        'CI/CD',
        'Docker',
      ],
      github: 'https://github.com/RodrigoSADev/Task-Board',
      deploy: 'https://task-board-ruddy.vercel.app/',
    },
    {
      image: 'assets/projects/food-now.jpg',
      alt: 'Project Food Now',
      name: 'Food Now',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'SCSS',
        'Bootstrap',
        'SweetAlert2',
        'Jest',
        'CI/CD',
      ],
      github: 'https://github.com/RodrigoSADev/Food-Now',
      deploy: 'https://food-now-lake.vercel.app/hamburguer',
    },
    {
      image: 'assets/projects/dayvocional.jpg',
      alt: 'Project Dayvocional',
      name: 'Dayvocional',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Bootstrap',
        'Jest',
        'Cypress',
        'CI/CD',
      ],
      github: 'https://github.com/RodrigoSADev/Dayvocional',
      deploy: 'https://dayvocional.vercel.app/inicio',
    },
    {
      image: 'assets/projects/daily-news.jpg',
      alt: 'Project Daily News',
      name: 'Daily News',
      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'Jest',
        'Playwright',
        'Ngx Carousel Ease',
        'CI/CD',
      ],
      github: 'https://github.com/RodrigoSADev/Daily-News',
      deploy: 'https://daily-news-beta.vercel.app/noticias',
    },
    {
      image: 'assets/projects/meteora.jpg',
      alt: 'Project Meteora',
      name: 'Meteora',
      technologies: [
        'Angular',
        'TypeScript',
        'NgRx',
        'Bootstrap',
        'Karma',
        'Jasmine',
      ],
      github: 'https://github.com/RodrigoSADev/Meteora',
      deploy: 'https://meteora-rs.netlify.app/home',
    },
    {
      image: 'assets/projects/buscante.jpg',
      alt: 'Project Buscante',
      name: 'Buscante',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Bootstrap',
        'Karma',
        'Jasmine',
        'Infinite Scroll',
        'Google Books API',
      ],
      github: 'https://github.com/RodrigoSADev/Buscante',
      deploy: 'https://buscante-rs.netlify.app/home',
    },
  ];
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
