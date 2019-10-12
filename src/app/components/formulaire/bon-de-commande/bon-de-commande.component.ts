import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultationService } from '../../../shared/services/consultation.service';
import { NgForm } from '@angular/forms';
import { ConsultationModel } from '../../../shared/model/consultation.model';
  import { FournisseurModel } from '../../../shared/model/fournisseur.model';
import { BcModel } from '../../../shared/model/bc.model';
import { AccountService } from '../../../shared/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.css'],
  providers: [ConsultationService]
})
export class BonDeCommandeComponent implements OnInit {
  @ViewChild('f') formSearch: NgForm;
  @ViewChild('g') formConsul: NgForm;
  bc: any;

minMentant : number;
objetcherche : string;
consu : any = [];

minid : number;
minpid : string;
minpname : string;
minDate : string;
minAddress:string;
minppatente: string;
minpice: string;
minpif: string;
minprc: string;
minpbankaccount: string;
minpbank : string;
minpcnss: string;
minpcity: string;
hasResponse : boolean = false;
messageError : string = "Saisissez un objet";
  constructor(public consultationsService : ConsultationService , public accountService : AccountService , public router : Router) { }

  ngOnInit() {


  }

  onSubmit(){


    console.log("onSubmit");
    this.objetcherche= this.formSearch.value.searchText; // le text saisi
      this.consultationsService.getAllConsultationsAgain().subscribe(consultations => {
        this.consu = consultations;
        console.log(this.consu.length );
        let j : number = 0; 
        let k : number = 0;

        this.minMentant = 1000000000;

        for(let i = 0 ; i<this.consu.length ; i++){
          if(this.consu[i].objet==this.objetcherche){
            k++;
          }

          if(this.consu[i].objet == this.objetcherche && this.consu[i].mentant!=0 && this.consu[i].mentant<this.minMentant ){
           
            this.minMentant=this.consu[i].mentant;
            this.minid=this.consu[i].idConsultation;
            this.minpid=this.consu[i].fournisseurList.pid;

            this.minpname=this.consu[i].fournisseurList.pname;
            this.minAddress=this.consu[i].fournisseurList.paddr;
            this.minpbankaccount= this.consu[i].fournisseurList.pbankaccount;
            this.minpice=this.consu[i].fournisseurList.pice;
            this.minprc=this.consu[i].fournisseurList.prc;
            this.minDate=this.consu[i].dateCreation;
            this.minppatente=this.consu[i].fournisseurList.ppatente;
            this.minpcnss= this.consu[i].fournisseurList.pcnss;
            this.minpif=this.consu[i].fournisseurList.pif;
            this.minpbank= this.consu[i].fournisseurList.pbank;

            this.hasResponse=true;
            console.log("------------");
           }
           else if(this.consu[i].objet==this.objetcherche && this.consu[i].mentant == 0){
              j++;
           }
     
        }
        
        console.log(j + "      " + k + "  " + this.hasResponse + " " + this.objetcherche);

        if(j == k || this.hasResponse == false){
          this.hasResponse = false;
          this.messageError = "Aucune fournisseur n'a répondu Ou la consultation n'existe pas";
        }
        
      });

   // if (this.minMentant==100000)
   // this.hasResponse=false;
  console.log(this.minMentant);
  

}

onPrint(){
 
this.bc=new BcModel();
  this.bc.consultation= new ConsultationModel();
  this.bc.consultation.fournisseurList=new FournisseurModel();
 // this.bc.consultation.fournisseurList=new FournisseurModel();
/*bc.consultation.fournisseurList.paddr=this.minAddress;
bc.consultation.fournisseurList.pbankaccount=this.minpbankaccount;
bc.consultation.fournisseurList.ppatente=this.minppatente;
bc.consultation.fournisseurList.prc=this.minprc;
bc.consultation.fournisseurList.pice=this.minpice;
bc.consultation.fournisseurList.pcnss=this.minpcnss;
bc.consultation.fournisseurList.pif=this.minpif;
bc.consultation.fournisseurList.pbank=this.minpbank;
bc.consultation.fournisseurList.pcity=this.minpcity;
bc.consultation.fournisseurList.pname=this.minpname;*/
this.bc.consultation.idConsultation=this.minid;
this.bc.Budjet= 0;

this.bc.Exercice=this.formConsul.value.Exercice;
this.bc.LRG=this.formConsul.value.LRG;

this.bc.PAR=this.formConsul.value.PAR;
this.bc.Ligne=this.formConsul.value.Ligne;
this.bc.TVA=5;

this.bc.Qty=this.formConsul.value.Qty;
console.log(this.bc);
this.consultationsService.postBC(this.bc).subscribe(data => {

  this.router.navigate(['/formulaire/recherche-bc']);
}, err => {
  console.log(err);
}
);
console.log(this.bc);

}

}