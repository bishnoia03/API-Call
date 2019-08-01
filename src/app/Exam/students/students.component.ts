import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  student=[{name:'Aman Kumar',dob:'15-09-1994',br:'MCA',gender:'Male',pass:'Passout'},
           {name:'Aman Kumar',dob:'15-09-1994',br:'MBA',gender:'Male',pass:'Fail'},
           {name:'Navjot',dob:'15-09-1994',br:'Testing',gender:'Male',pass:'Passout'},
           {name:'Happy',dob:'15-09-1994',br:'Design',gender:'Male',pass:'Fail'},
           {name:'Aman Kumar',dob:'15-09-1994',br:'MCA',gender:'Male',pass:'Re-appear'},
           {name:'Navjot Singh',dob:'15-09-1994',br:'Testing',gender:'Male',pass:'Fail'},
           {name:'Aman Kumar',dob:'05-12-1994',br:'Devloper',gender:'Male',pass:'Passout'},
           {name:'Aman Kumar',dob:'15-09-1998',br:'Testing',gender:'Male',pass:'Passout'},
           {name:'Vishal',dob:'15-09-1992',br:'BA',gender:'Male',pass:'Re-appear'},
           {name:'Aman Kumar',dob:'17-08-1990',br:'Testing',gender:'Male',pass:'Passout'}
           
];

list;

  constructor() { }

  modal:any={};
add(){
  this.list.push(this.modal);
  this.modal={};
  
}
  
    ngOnInit() {
      this.list=[
        {name:''}
      ]
    }
  
  }
