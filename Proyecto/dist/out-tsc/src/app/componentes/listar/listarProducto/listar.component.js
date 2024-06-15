import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarComponent = class ListarComponent {
    constructor(_productService, toastr) {
        this._productService = _productService;
        this.toastr = toastr;
        this.listarProductos = [];
        this.loadig = false;
    }
    ngOnInit() {
        this.getlistarProductos();
    }
    getlistarProductos() {
        this.loadig = true;
        this._productService.getListProducts().subscribe((data) => {
            this.listarProductos = data;
            this.loadig = false;
        });
    }
    deleteProducto(id) {
        this.loadig = true;
        this._productService.deleteProducto(id).subscribe(() => {
            this.getlistarProductos();
            this.toastr.warning('El producto Fue Eliminado Con exito', 'Prodcuto Eliminado');
        });
    }
};
ListarComponent = __decorate([
    Component({
        selector: 'app-listar',
        templateUrl: './listar.component.html',
        styleUrl: './listar.component.css'
    })
], ListarComponent);
export { ListarComponent };
//# sourceMappingURL=listar.component.js.map