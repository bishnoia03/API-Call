import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  list=[{name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Aman',trade:'Design',contact:'8295716429'},
        {name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Aman Kumar',trade:'Angular',contact:'8295716429'},
        {name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Navjot Singh',trade:'Testing',contact:'8295716229'},
        {name:'Vishal',trade:'Digital Marketing',contact:'9992616090'},
        {name:'Harpreet',trade:'Marketing',contact:'9456876129'}
];
gate=false;
password=['ADMIN123','Aman','1122'];
// fun(x){
//   if(x==this.password)
//   {
//     this.gate=true;
//   }
//   else
//   {
//     this.gate=false;
//   }
// }
fun(x){
  for(let i=0;i<this.password.length;i++)
  if(x==this.password[i])
  {
    this.gate=true;
    break;
  }
  else
  {
    this.gate=false;
  }
}

  constructor() { }

  ngOnInit() {
  }

}
