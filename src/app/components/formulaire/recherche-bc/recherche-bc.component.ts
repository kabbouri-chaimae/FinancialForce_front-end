import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-bc',
  templateUrl: './recherche-bc.component.html',
  styleUrls: ['./recherche-bc.component.scss']
})
export class RechercheBcComponent implements OnInit {
  @ViewChild('f') formConsul: NgForm;

  constructor( public router : Router) { }

  ngOnInit() {
  }


  onSubmit(){
    this.router.navigate(['/formulaire/ordre-imputation']);

  }
}
