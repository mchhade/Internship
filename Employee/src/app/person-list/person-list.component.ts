import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../component/popup/popup.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  fields =
    [
      { type: 'text', label: 'First Name', itemName: 'first_name' },
      { type: 'text', label: 'Last Name', itemName: 'last_name' },
      { type: 'number', label: 'Age', itemName: 'age' },
      { type: 'text',label:'Department',itemName:'departmentName' }
    ];
  persons =
    [
      { first_name: 'Jason', last_name: 'Statham', age: 24, departmentName: 'Security', salary: 6000 },
      { first_name: 'Stif', last_name: 'Jobs', age: 24, departmentName: 'Security', salary: 6000 },
      { first_name: 'Mark', last_name: 'Zekrberk', age: 24, departmentName: 'Security', salary: 6000 },
      { first_name: 'Mark', last_name: 'Smith', age: 24, departmentName: 'Security', salary:6000},
    ];
  values={first_name:'',last_name:'',age:0,departmentName:''}
  ngOnInit() {
  }
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.fields = this.fields;
    modalRef.componentInstance.values = this.values;
  }
  edit(person: any) {
    this.values = person;
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.fields = this.fields;
    modalRef.componentInstance.values = this.values;
  }
}
