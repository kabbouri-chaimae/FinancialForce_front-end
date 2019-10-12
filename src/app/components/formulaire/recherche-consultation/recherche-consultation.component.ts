import {Component, OnInit, ViewChild} from '@angular/core';
import {FournisseurModel} from '../../../shared/model/fournisseur.model';
import {ConsultationsComponent} from '../consultations/consultations.component';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {NgForm} from '@angular/forms';
import { from, Observable } from 'rxjs';
import { ConsultationModel } from '../../../shared/model/consultation.model';
import { ConsultationService } from '../../../shared/services/consultation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recherche-consultation',
  templateUrl: './recherche-consultation.component.html',
  styleUrls: ['./recherche-consultation.component.scss'],
  providers: [ConsultationService]

})

export class RechercheConsultationComponent implements OnInit {
  public consultations: Observable<ConsultationModel>

  
    @ViewChild('f') formSearch: NgForm;

    editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: '18rem',
    minHeight: '5rem',
    placeholder: '',
    translate: 'no'
  };
  objetcherche : string ;
  /*objetConsultation: string;
  dateCreationConsultation: string;
  messageConsultation: string = "hello";
  materiel: string;
  fournisseurList: String[];

  consultaionsFounded: boolean = false;
*/ 
   consu = [];
   aa: number ;
   consultationsLength: number;

  constructor(public consultationsService : ConsultationService ) {

  }

  ngOnInit() { 

  }  

  onSubmit(){
    this.aa=0;
    console.log(this.objetcherche);

    this.objetcherche= this.formSearch.value.searchText; // le text saisi
    console.log(this.objetcherche);

    this.consultations = this.consultationsService.getAllConsultations();
    this.consultationsLength = this.consultationsService.getAllConsultations.length;
 console.log(this.objetcherche);
 /* const consultations = []; 
 
  for(let i = 0; i < 20; i++){

    
    consultations[i] =new ConsultationModel();

    
       
  consultations[i]=this.consultationsService.getConsultations(this.objetcherche)
     
*/

    
  

     /* this.consultaionsFounded = true;  // si la requete GET est reussi, on affiche le div qui sert a afficher les informarions d'un consultation

      // Après avoir récupéré la consultation on affect le resultat aux variables ci-dessus
      this.messageConsultation = "";
      this.dateCreationConsultation = "";
      this.materiel = "";
      this.fournisseurList = ["",""];
      this.objetConsultation = ""; */
  }
  yourMethod(){
    this.aa = this.aa + 1;
    console.log(this.aa);
  }
}
