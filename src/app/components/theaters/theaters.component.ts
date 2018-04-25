import { Component } from '@angular/core';

@Component({
  selector: 'app-theater',
  templateUrl: './theaters.component.html',
  styleUrls:['./theaters.css']
})


export class AppTheatersComponent {
    showList:boolean = true;
    showAdd:boolean = false;
    constructor(){}
    showListTheaters(){
        this.showList = true;
        this.showAdd = false;
    }
    showNewTheater(){
        this.showAdd = true;
        this.showList=false;
    }
}
