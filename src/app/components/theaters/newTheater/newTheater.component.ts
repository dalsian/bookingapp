import { Component } from '@angular/core';
import {Theater} from '../../../entities/Theater'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-theater-add',
  templateUrl: './newTheater.component.html',
  styleUrls:['./newTheater.css'],
  animations: [

    trigger('sections', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class AppNewTheatersComponent {
  model:Theater
  sectionName:string;
  numberOfSeats:number;
  price:number;
  sections:any[] = []
  constructor(){
    this.model = new Theater();
  }

  addSection(){
    this.sections.push({sectionName:this.sectionName,numberOfSeats:this.numberOfSeats,price:this.price});
    this.init();
  }

  init(){
    this.price = 0;
    this.numberOfSeats = 0;
    this.sectionName = "";
  }

  removeSection(name){
    this.sections = this.sections.filter(x=>!(x.sectionName == name));
  }
  
}
