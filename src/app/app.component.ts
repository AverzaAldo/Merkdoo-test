import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorText = '';
  productName ='';
  productDesc = '';
  productSku = '';
  products: string[][] = [];


  addProduct(){
    if (this.productName == '' || this.productDesc == '' || this.productSku == '') //valida que todos los datos estén llenos
    {
      this.errorText = 'Por favor llenar todos los campos';
      setTimeout (() => {
        this.errorText = '';
      }, 2000); //muestra el mensaje por dos segundos
    }
    else
    {
      this.products.push([this.productName, this.productDesc, this.productSku]);
      this.productName ='';
      this.productDesc = '';
      this.productSku = '';
    }//introduce productos al array y limpia los campos
  }

  deleteRow(index) {
      this.products.splice(index, 1);//borra la fila seleccionada
    }


}
