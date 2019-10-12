import { FournisseurModel } from './fournisseur.model';
import { ConsultationModel } from './consultation.model';

export class BcModel {
  idBC: number;
  consultation : ConsultationModel;
  Budjet : number;
  Qty : number;
  TVA : number;
  Exercice : string;
  PAR: string;
  LRG :string;
  Ligne :string;
}
