import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbOffcanvas, OffcanvasDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prog = 0;
  closeResult = '';
  newUser = "Create your account";
  highlightPointer = "cursor";
  infoData = [
    { id: 10, projectName: "ePRI", technologyUsed: "Angular", yearWorked:"2021"},
    { id: 20, projectName: "Poe", technologyUsed: "Angular", yearWorked:"2022"},
    { id: 30, projectName: "Choice", technologyUsed: "Core HTML,SCSS", yearWorked:"2021"},
    { id: 40, projectName: "Gym Website", technologyUsed: "Wordpress", yearWorked:"2022"}
  ];
  constructor(private offcanvasService: NgbOffcanvas, private router: Router) {
    setInterval(()=> {
      if(this.prog < 100){
        this.prog = this.prog + 0.1;
      }
      else{
        this.prog = 0;
      }
    }, 100);
  }
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {ariaLabelledBy: 'offcanvas-basic-title' , position: 'end'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content1: TemplateRef<any>) {
    this.offcanvasService.open(content1, {ariaLabelledBy: 'offcanvas-basic-title' , position: 'end'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
  }

}
