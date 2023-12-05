import { Component } from '@angular/core';
import { ModalService } from '../components/modal/modal.service';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './componentes.component.html',
})
export class ComponentesComponent {
  constructor(private modalService: ModalService) {}

  openModal(id: string) {
    this.modalService.openModal(id);
  }

  closeModal(id: string) {
    this.modalService.closeModal(id);
  }

  isModalOpen(id: string): boolean {
    return this.modalService.isModalOpen(id);
  }
}
