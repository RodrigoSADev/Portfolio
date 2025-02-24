import { Component } from '@angular/core';
import { PdfViewerComponent } from '../../features/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-home',
  imports: [PdfViewerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
