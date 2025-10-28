import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import {  CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import {v4 as uuidv4} from 'uuid';
import { Router } from '@angular/router';


@Component({
  selector: 'app-certifiado-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certifiado-form.component.html',
  styleUrl: './certifiado-form.component.css'
})
export class CertifiadoFormComponent {

  constructor(private certificadoService: CertificadoService, private route: Router) {}

  @ViewChild('form') form!: NgForm;

  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Palestra', 'Curso', 'Workshop', 'Evento' ];

  certificado: Certificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: ''
  };


  campoInvalido(control: NgModel): boolean | null {
    return control.invalid && control.touched ;
  }

  formValido(): boolean {
    return this.certificado.nome.length > 0 && this.certificado.atividades.length > 0;
  }

  adicionarAtividade(): void {
    if (this.atividade.length > 0) {
      this.certificado.atividades.push(this.atividade);
      this.atividade = '';
    }
  }

  excluirAtividade(index: number): void {
    this.certificado.atividades.splice(index, 1);
  }

  submit(): void {
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);
    this.route.navigate(['/certificados', this.certificado.id]);
    this.certificado = this.estadoIniciailCertificado();
    this.form.resetForm();
  }

  dataAtual(): string {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  estadoIniciailCertificado(): Certificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: ''
    };
  }
}
