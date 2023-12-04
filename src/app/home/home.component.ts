import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../components/modal/modal.service';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router, private modalService: ModalService) {}

  navegarParaWelcome() {
    this.router.navigate(['bem-vindo']);
  }

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
