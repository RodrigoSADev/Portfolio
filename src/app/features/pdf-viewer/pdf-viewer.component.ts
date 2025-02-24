import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-pdf-viewer',
  imports: [PdfViewerModule, Dialog],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss',
})
export class PdfViewerComponent {
  visible: boolean = false;
  pdfSrc: string = 'assets/resume.pdf';

  onShowDialog() {
    this.visible = true;
  }
}
