import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Clients } from './clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientForm !: FormGroup;
  clientsModelObj: Clients = new Clients();
  clientDataList !: any;
  showAddBtn !: boolean;
  showUpdateBtn !: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      doj: [''],
      mobileNum: [''],
      state: [''],
      totalPaymentReceived: [''],
      termsAndConditions: ['']
    })

    this.getAllCLients();
  }

  postClientDetails() {
    this.clientsModelObj.id = this.clientForm.value.id;
    this.clientsModelObj.firstName = this.clientForm.value.firstName;
    this.clientsModelObj.lastName = this.clientForm.value.lastName;
    this.clientsModelObj.email = this.clientForm.value.email;
    this.clientsModelObj.doj = this.clientForm.value.doj;
    this.clientsModelObj.mobileNum = this.clientForm.value.mobileNum;
    this.clientsModelObj.state = this.clientForm.value.state;
    this.clientsModelObj.totalPaymentReceived = this.clientForm.value.totalPaymentReceived;
    this.clientsModelObj.termsAndConditions = this.clientForm.value.termsAndConditions;

    this.api.postClient(this.clientsModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Client added successfully")
        let ref = document.getElementById('closeForm')
        ref?.click();
        this.clientForm.reset();
        this.getAllCLients();
      },
        err => {
          alert("Something went wrong")
        })
  }
  getAllCLients() {
    this.api.getClient()
      .subscribe(res => {
        this.clientDataList = res;
      })
  }
  deleteClientDetails(row: any) {
    this.api.deleteClient(row.id)
      .subscribe(res => {
        alert("Client details deleted Successfully");
        this.getAllCLients();
      })
  }
  onEditClientDetails(row: any) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.clientsModelObj.id = row.id;
    this.clientForm.controls['firstName'].setValue(row.firstName);
    this.clientForm.controls['lastName'].setValue(row.lastName);
    this.clientForm.controls['email'].setValue(row.email);
    this.clientForm.controls['doj'].setValue(row.doj);
    this.clientForm.controls['mobileNum'].setValue(row.mobileNum);
    this.clientForm.controls['totalPaymentReceived'].setValue(row.totalPaymentReceived);
  }
  updateClientDetails() {
    this.clientsModelObj.firstName = this.clientForm.value.firstName;
    this.clientsModelObj.lastName = this.clientForm.value.lastName;
    this.clientsModelObj.email = this.clientForm.value.email;
    this.clientsModelObj.doj = this.clientForm.value.doj;
    this.clientsModelObj.mobileNum = this.clientForm.value.mobileNum;
    this.clientsModelObj.state = this.clientForm.value.state;
    this.clientsModelObj.totalPaymentReceived = this.clientForm.value.totalPaymentReceived;
    this.clientsModelObj.termsAndConditions = this.clientForm.value.termsAndConditions;
    this.api.updateClient(this.clientsModelObj, this.clientsModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully");
        let ref = document.getElementById('closeForm')
        ref?.click();
        this.getAllCLients();
        this.clientForm.reset();
      })
  }
  OnClickAddClients() {
    this.clientForm.reset();
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }
}
