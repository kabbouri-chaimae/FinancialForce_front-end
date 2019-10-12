import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './components/error/404.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ConsultationsComponent} from './components/formulaire/consultations/consultations.component';
import {FormulaireComponent} from './components/formulaire/formulaire.component';
import {BonDeCommandeComponent} from './components/formulaire/bon-de-commande/bon-de-commande.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { RechercheConsultationComponent } from './components/formulaire/recherche-consultation/recherche-consultation.component';
import { ModelDeDevisComponent } from './components/formulaire/model-de-devis/model-de-devis.component';
import { GestFourComponent } from './components/gest-four/gest-four.component';
import { RechercheBcComponent } from './components/formulaire/recherche-bc/recherche-bc.component';
import { OrdreImputationComponent } from './components/formulaire/ordre-imputation/ordre-imputation.component';


// ToDo trouver une solution pour les parenthèses (et le #)qui apparaissent dans le URL (e.g /#/formulaire/(consultations))
export const routes: Routes = [
 
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
 
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
   

      {
        path: 'formulaire',
        component: FormulaireComponent,
        children: [    
          { path: 'employees',
                 component: EmployeesComponent,
  
              },
             { path: 'fournisseurs',
            component: ProvidersComponent,
  
            },
            { path: 'GestFournisseurs',
            component: GestFourComponent,
  
            },
          {
            
            path: 'consultations',
            component: ConsultationsComponent,
          },
          {
            path: 'bon-de-commande',
            component: BonDeCommandeComponent,
          },
          {
            path: 'ordre-imputation',
            component: OrdreImputationComponent,
          },
          {
            path: 'recherche-bc',
            component: RechercheBcComponent,
          },
          {
            path: 'recherche',
            component: RechercheConsultationComponent,
          },
          {
            path: 'devis',
            component: ModelDeDevisComponent,
          },
        ],
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
