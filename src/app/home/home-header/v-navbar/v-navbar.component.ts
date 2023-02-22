import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { find, reduce } from 'rxjs';

@Component({
  selector: 'app-v-navbar',
  templateUrl: './v-navbar.component.html',
  styleUrls: ['./v-navbar.component.scss']
})
export class VNavbarComponent implements OnInit {
[x: string]: any;
  signUpForm !: FormGroup;
  signInForm !: FormGroup;
  public showNav: boolean = true;
  @Input() hide: any;
  public vHeadingDark = "v-heading-dark";
  closeResult = '';
  error = {
    backgroundColor: 'red',
  }
  constructor(private offcanvasService: NgbOffcanvas, private formBuilder: FormBuilder,  private http: HttpClient, private router: Router, @Inject(DOCUMENT) public document: any, private activatedRouter: ActivatedRoute) {
    // this.document.body.classList.toggle('abc');
  }

//   themeToggle(){
//     let darkMode = localStorage.getItem('menu-open')

// if (darkMode === '') {
//   document.body.classList.toggle(('menu-open'))
//     localStorage.setItem('', 'menu-open')
// }

// let trans = () => {
//     document.documentElement.classList.add('menu-open');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('menu-open')
//     }, 1000)
// }
//   }
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

  // loginUser(signInForm: NgForm)  {
  //   console.log(signInForm.value.email);
  //   console.log(signInForm.value.password)
  // } 

  ngOnInit(): void {
   this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mbNum: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['' , [Validators.required, Validators.pattern]],
      confirmPassword: ['', [Validators.required]]
    });


    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    if(this.hide == "true") {
      this.showNav = false
    }
    this.activatedRouter.fragment.subscribe(res=>{
      this.jumpTo(res);
    })
  }
  
  jumpTo(section: any){
    setTimeout(()=>{
this.document.getElementById(section).scrollIntoView({behaviour: "smooth"});
    },150)
  }

  signUp(signUpForm:FormGroup){
    console.log(this.signUpForm.value);
    this.http.post<any>("http://localhost:3000/signUp",this.signUpForm.value).subscribe(res=>{
      alert("Register Successfully");
      this.signUpForm.reset();
      this.router.navigate(['about'])
    },
    err=>{
      alert("Something went wrong")
    })
  }

  loginUser(signInForm:FormGroup){
    this.http.get<any>("http://localhost:3000/signUp", this.signInForm.value).subscribe((res:any)=> {
    const user = res.find((a:any)=> {
      return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
    })
    if(user) {
      alert("Login Successfully");
      this.signInForm.reset();
      this.router.navigate(['dashboard'])
    }
    else {
      alert("user Not Found")
    }
  }, err=>{
    alert("Server Issue Found")
  }
    )
  }

  onSubmit(){
    if(this.signInForm.valid){
      console.log(this.signInForm.value)
    }else {
      this.validateAllFormFields(this.signInForm);
      alert("Form is invalid")
    }
  }

private validateAllFormFields(formGroup : FormGroup){
  Object.keys('formGroup.controls').forEach(field=>{
    const controls = formGroup.get(field);
    if(controls instanceof FormControl){
     controls.markAsDirty({onlySelf:true});
    }else if(controls instanceof FormGroup){
      this.validateAllFormFields(controls)
    }
  })
}


showHide(){
this.showNav = false;
this.hide = true;
console.log('click works')
}

}
