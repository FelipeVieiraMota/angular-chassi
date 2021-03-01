import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    title:string = 'angular-chassi - Table Test';

    configService:ConfigService;  

    filtred:IAllData = { data : [] };

    wait:boolean = false


    spinnerIcon = faPlusSquare;

    public constructor(private configServiceService:ConfigService){
      
      this.configService = configServiceService;
    }

    public async getAllStudents(){
      //this.wait = true

      await this.configService.getAllStudents().subscribe( ( data:IAllData ) => { this.filtred = data; this.wait = false; console.log(" Filtred " + JSON.stringify(this.filtred)) } );

    } 
}

export interface IAllData{

  data:IData[]
}

export interface IData{

  age:string,
  cpf:string,
  date_creation:string,
  first_name:string,
  id_student:string,
  last_name:string,
  rg:string,
  token:string,
}
