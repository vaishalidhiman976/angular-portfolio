import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductApiService } from '../shared/product-api.service';
import { ProductModel } from './product-model.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productForm !: FormGroup;
  ProductObj : ProductModel = new ProductModel();
  productList !: any;
  showUpdate !: boolean;
  showAdd : boolean = true;
  constructor( private formbuilder: FormBuilder, private api: ProductApiService) { }

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      productName : [''],
      productWeight : [''],
      productCost : [''],
      productExpiryDate : [''],
      productDetails : ['']
    })
this.getAllProducts();
  }

  addProduct(){
    this.ProductObj.id = this.productForm.value.id;
    this.ProductObj.productName = this.productForm.value.productName;
    this.ProductObj.productWeight = this.productForm.value.productWeight;
    this.ProductObj.productCost = this.productForm.value.productCost;
    this.ProductObj.productExpiryDate = this.productForm.value.productExpiryDate;
    this.ProductObj.productDetails = this.productForm.value.productDetails;

    this.api.postData(this.ProductObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product added successfully");
      let ref = document.getElementById("closeForm");
      ref?.click();
      this.productForm.reset();
      this.getAllProducts();
    },
    err=>{
      alert("Something went wrong")
    })
  }

  getAllProducts(){
    this.api.getData()
    .subscribe(res=>{
this.productList = res;
    })
  }

  deleteProduct(items : any){
    this.api.deleteData(items.id)
    .subscribe(res=>{
      alert("Product deleted successfully");
      this.getAllProducts();
    })
  }

  editProduct(items : any){
    this.showAdd = false;
    this.showUpdate =true;
    this.ProductObj.id = items.id;
    // this form control name = table item name
    this.productForm.controls['productName'].setValue(items.productName);
    this.productForm.controls['productWeight'].setValue(items.productWeight);
    this.productForm.controls['productCost'].setValue(items.productCost);
    this.productForm.controls['productExpiryDate'].setValue(items.productExpiryDate);
    this.productForm.controls['productDetails'].setValue(items.productDetails);
  }

  updateProduct(){
    this.ProductObj.productName = this.productForm.value.productName;
    this.ProductObj.productWeight = this.productForm.value.productWeight;
    this.ProductObj.productCost = this.productForm.value.productCost;
    this.ProductObj.productExpiryDate = this.productForm.value.productExpiryDate;
    this.ProductObj.productDetails = this.productForm.value.productDetails;

    this.api.updateData(this.ProductObj, this.ProductObj.id)
    .subscribe(res=>{
      alert("Product updated successfully");
      let ref = document.getElementById("closeForm")
      ref?.click();
      this.productForm.reset();
      this.getAllProducts();
    })
  }

}
