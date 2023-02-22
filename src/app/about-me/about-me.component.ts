import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { AboutApiService } from '../shared/about-api.service';
import { AboutClass } from './about-class.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
public hide= true;
abtForm !: FormGroup;
aboutArray !:any;
aboutObj : AboutClass = new AboutClass();
showAddBtn: boolean = true;
showUpdateBtn: boolean = false;
  constructor( private fb: FormBuilder, private api: AboutApiService) { }

  ngOnInit(): void {
    this.abtForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
    })

    this.getAllAbout();
  }

addAbout(){
this.aboutObj.id = this.abtForm.value.id;
this.aboutObj.name = this.abtForm.value.name;
this.aboutObj.email = this.abtForm.value.email;
this.aboutObj.price = this.abtForm.value.price;
this.aboutObj.date = this.abtForm.value.date;

this.api.postAbout(this.aboutObj).subscribe((res:any)=>{
  if(this.abtForm.valid){
  alert('Added Successfully')
  let close = document.getElementById('closeForm');
  close?.click();
  this.abtForm.reset();
  this.getAllAbout();
  } else{
    this.ValidateAllFields(this.abtForm);
    alert("Form is invalid")
  }
},err=>{
  alert('Something went wrong');
})
}

 getAllAbout(){
this.api.getAbout().subscribe((res:any)=>{
  this.aboutArray = res;
})
 }

 editAbout(data:any){
  this.showAddBtn = false;
  this.showUpdateBtn = true;
  this.aboutObj.id = data.id;
  this.abtForm.controls['name'].setValue(data.name);
  this.abtForm.controls['email'].setValue(data.email);
  this.abtForm.controls['price'].setValue(data.price);
  this.abtForm.controls['date'].setValue(data.date);
 }

 updateAbout(){
this.aboutObj.name = this.abtForm.value.name;
this.aboutObj.email = this.abtForm.value.email;
this.aboutObj.price = this.abtForm.value.price;
this.aboutObj.date = this.abtForm.value.date;
this.api.updateAbout(this.aboutObj, this.aboutObj.id).subscribe((res:any)=>{
  alert('Update Successfully');
  let ref = document.getElementById('closeForm');
  ref?.click();
  this.getAllAbout();
})
}

deleteThisAbout(data:any){
  this.api.deleteAbout(data.id).subscribe((res:any)=>{
    confirm('Do you want to delete ??')
this.getAllAbout();
  })
}

private ValidateAllFields(formGroup : FormGroup){
  Object.keys('formGroup.controls').forEach(field=>{
    const controls = formGroup.get(field);
    if(controls instanceof FormControl){
     controls.markAsDirty({onlySelf:true});
    }else if(controls instanceof FormGroup){
      this.ValidateAllFields(controls);
    }
  })
}

}
