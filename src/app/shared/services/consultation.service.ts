import { Injectable } from '@angular/core';
import { ConsultationModel } from '../model/consultation.model';
import { Http } from '@angular/http';
import { AppComponent } from '../../app.component';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BcModel } from '../model/bc.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private baseUrl = AppComponent.API_URL+'/account/updatec';
 
  consultations: any = [];

  public _consultation: ConsultationModel ;

  constructor(public http : Http){ }

  ngOnInit(): void {
  
  }

  set consultation(value: ConsultationModel) {
    this._consultation = value;
  }
  
  postConsultation(consultation : ConsultationModel){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  ''});
    let options = { headers: headers };

    return this.http.post(AppComponent.API_URL+'/account/consultation',consultation)
      .map(resp=>resp.json());
  }
 getConsultationId(){
 

    return this.http.get(AppComponent.API_URL+'/account/nextConsultation')
      .map(resp=>resp.json());
  }

  getConsultations(object: string) : Observable<ConsultationModel>{

    return this.http.get(AppComponent.API_URL+'/account/getByObject/' + object)
      .map(resp=>resp.json());
  }
  
  getAllConsultations(){
  const consu = []
    return this.http.get(AppComponent.API_URL+'/account/getAllConsultations')
      .map(resp=>resp.json())
      
  }

  updateConsultation(idConsultation:number , value : any) : Observable<any>{
    return this.http.put( `${this.baseUrl}/${idConsultation}`, value);
  
  
  
  
    /* const data = JSON.stringify(consu);
    return this.http.put(AppComponent.API_URL+'/account/UpdateConsultation', data)
    .map(response => { return response.json() }) // you can get json response here 
    .subscribe(
        response => response.data as ConsultationModel, // -- change here --
        error => console.log(error)
    );*/
}

  
getAllConsultationsAgain(){
  
    return this.http.get(AppComponent.API_URL+'/account/getAllConsultations')
      .map(resp=>resp.json())
      ;
  
      
      
  }
  postBC(bc:BcModel){
    return this.http.post(AppComponent.API_URL+'/account/BC',bc)
      .map(resp=>resp.json());
  }


}
