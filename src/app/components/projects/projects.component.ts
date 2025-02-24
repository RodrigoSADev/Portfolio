import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projects',
  imports: [CarouselModule, ButtonModule, TagModule, CardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
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
      image: 'assets/projects/daily.jpg',
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
  ];
  responsiveOptions: any[] | undefined;

  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //     this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warn';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
