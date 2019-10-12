import { Component, OnInit, ViewChild } from '@angular/core';
import { FournisseurModel } from '../../shared/model/fournisseur.model';
import { NgForm } from '@angular/forms';
import { FournisseursService } from '../../shared/services/fournisseurs.service';

@Component({
  selector: 'app-gest-four',
  templateUrl: './gest-four.component.html',
  styleUrls: ['./gest-four.component.scss']
})
export class GestFourComponent implements OnInit {
  @ViewChild('f') formConsul: NgForm;
  providers : any;
  ajoute : boolean;
  constructor(public fournisseursService : FournisseursService) { }

  ngOnInit() {
  }
 

  onSubmit(){
  

   
       this.providers =new FournisseurModel();

    this.providers.paddr = this.formConsul.value.paddr;
    this.providers.pbankaccount= this.formConsul.value.pbankaccount;
    this.providers.pcity= this.formConsul.value.pcity;
    this.providers.pcnss = this.formConsul.value.pcnss;
  
    this.providers.pname=this.formConsul.value.pname;
    this.providers.prc = this.formConsul.value.prc;
    this.providers.pif=this.formConsul.value.pif;
    this.providers.ppatente = this.formConsul.value.ppatente;
    this.providers.pice = this.formConsul.value.pice;
    this.providers.pbank = this.formConsul.value.pbank;

    // ToDo comment implementer l'utilisation de la table materiel
    // consultation.materiel.designation = this.formConsul.value.me;

    
  
    this.fournisseursService.postSelectedProviders(this.providers).subscribe(data => {
     this.ajoute=true;
    }, err => {
      console.log(err);
      
    }
  );


  }
}
