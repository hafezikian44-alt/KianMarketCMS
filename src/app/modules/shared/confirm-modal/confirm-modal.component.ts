import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  @Input() confirmName?: string | null;
  @Input() confirmId?: number | null;
  @Input() openModal?: boolean | null;

  @Output() closeModal = new EventEmitter<false>();
  onCloseModal() {
    this.closeModal.emit(false);
  }
}
