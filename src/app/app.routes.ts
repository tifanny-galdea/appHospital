import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full',
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./paginas/inicio-sesion/inicio-sesion.page').then( m => m.InicioSesionPage)
  },
  {
    path: 'agendar-citas',
    loadComponent: () => import('./paginas-paciente/agendar-citas/agendar-citas.page').then( m => m.AgendarCitasPage)
  },
  {
    path: 'historial-citas',
    loadComponent: () => import('./paginas-paciente/historial-citas/historial-citas.page').then( m => m.HistorialCitasPage)
  },
  {
    path: 'estado-turno',
    loadComponent: () => import('./paginas-paciente/estado-turno/estado-turno.page').then( m => m.EstadoTurnoPage)
  },
  {
    path: 'lista-pacientes',
    loadComponent: () => import('./paginas-enfermeria/lista-pacientes/lista-pacientes.page').then( m => m.ListaPacientesPage)
  },
  {
    path: 'historial-paciente',
    loadComponent: () => import('./paginas-medico/historial-paciente/historial-paciente.page').then( m => m.HistorialPacientePage)
  },
  {
    path: 'registro-diagnostico',
    loadComponent: () => import('./paginas-medico/registro-diagnostico/registro-diagnostico.page').then( m => m.RegistroDiagnosticoPage)
  },
  {
    path: 'validar-entrada',
    loadComponent: () => import('./paginas-administrador/validar-entrada/validar-entrada.page').then( m => m.ValidarEntradaPage)
  },
  {
    path: 'registro-usuarios',
    loadComponent: () => import('./paginas-administrador/registro-usuarios/registro-usuarios.page').then( m => m.RegistroUsuariosPage)
  },
  {
    path: 'registro-signos-vitales',
    loadComponent: () => import('./paginas-enfermeria/registro-signos-vitales/registro-signos-vitales.page').then( m => m.RegistroSignosVitalesPage)
  },
];
