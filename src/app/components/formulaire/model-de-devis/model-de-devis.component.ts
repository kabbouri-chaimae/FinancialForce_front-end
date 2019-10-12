import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ConsultationService } from '../../../shared/services/consultation.service';
import { ConsultationModel } from '../../../shared/model/consultation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-de-devis',
  templateUrl: './model-de-devis.component.html',
  styleUrls: ['./model-de-devis.component.css']
})
export class ModelDeDevisComponent implements OnInit {
  @ViewChild('f') devisForm: NgForm;
  newConsultation = new ConsultationModel();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(public consultationsService : ConsultationService , public router : Router) { }

  ngOnInit() {

    // ToDo recupérer la liste de noms fournissuers
    this.dropdownList =   ['société 1', 'société 2', 'société 3',
      'société 4', 'société 5', 'société 6', 'société 7'];

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'selectionner tout',
      unSelectAllText: 'tout déselectionner',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
  }

  onSubmit(){
    this.selectedItems[0]; // la societe selectionnée


   this.newConsultation.idConsultation=  this.devisForm.value.idConsultation ;

  this.newConsultation.mentant =  this.devisForm.value.prixSuggerer ;
    this.consultationsService.updateConsultation(this.newConsultation.idConsultation , {mentant : this.newConsultation.mentant})
    .subscribe(data => {
      console.log(data);
    this.newConsultation=data as ConsultationModel;
    this.router.navigate(['/formulaire/bon-de-commande']);

    },
    error => console.log(error));

    }
  
  onItemSelect(item: any) {
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }
}
