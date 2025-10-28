import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertifiadoFormComponent } from './pages/certifiado-form/certifiado-form.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: '', component: CertificadosComponent
  },
  {
    path: 'certificados/novo', component: CertifiadoFormComponent
  },
  {
    path: 'certificados/:id', component: CertificadoComponent
  }
];
