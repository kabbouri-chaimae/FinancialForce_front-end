import { FournisseurModel } from './fournisseur.model';

export class ConsultationModel {
  idConsultation: number;
  objet: string;
  dateCreation: string;
  lieuConsultation: string;
  message: string;
  fournisseurList: FournisseurModel; //ceci n'est pas une liste , un seul fournisseur
  mentant : number = 8;
}
