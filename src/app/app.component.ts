import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { RouterModule } from '@angular/router';
import { CertificadoService } from './_services/certificado.service';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService = certificados ? JSON.parse(certificados) : [];
  }
}
