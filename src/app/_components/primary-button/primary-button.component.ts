import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input() textoBotao: string = 'Clique Aqui';
  @Input() disabled: boolean = false;
}
