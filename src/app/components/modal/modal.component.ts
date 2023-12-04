import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() id: string = '';
  @Input() isOpen = false;
  constructor(private modalService: ModalService) {}

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.closeModal(this.id);
  }

  closeModal(id: string) {
    this.modalService.closeModal(id);
  }

  onModalContentClick(event: Event) {
    event.stopPropagation();
  }
}
