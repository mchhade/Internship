import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input()
  fields: any[] = [];
  @Input()
  values: any[] = [];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    
  }

}
