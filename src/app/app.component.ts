import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    public title:string = 'angular-chassi - Table Test';

    public configService:ConfigService;  

    public filtred:IAllData = { data : [] };

    public wait:boolean = false

    public spinnerIcon = faPlusSquare;

    public constructor(private configServiceService:ConfigService){
      
      this.configService = configServiceService;
    }


    private cpfMask(cpf:string){
      if (cpf.length == 11){
        let exp = /\.|\-/g
        cpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
      }
      return cpf
    }

    private rgMask(rg:string){
      return rg.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{1})/, "$1.$2.$3-$4")
    }


    public async getAllStudents(){

      await this.configService.getAllStudentsLocalHost().subscribe( ( data:IAllData ) => { 
        
        this.filtred = data;
        
        if (this.filtred.data.length > 0){
          this.filtred.data.forEach(ele => {
            ele.cpf = this.cpfMask(ele.cpf)
            ele.rg = this.rgMask(ele.rg)
          })
        }
      });
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
  email:string,
  ra:string,
  student_internal_code:string,
  cellphone:string
}
