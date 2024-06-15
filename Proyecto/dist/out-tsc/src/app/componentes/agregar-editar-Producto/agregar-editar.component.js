import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AgregarEditarComponent = class AgregarEditarComponent {
    constructor(fb, _productService, rutas, toastr, aRouter) {
        this.fb = fb;
        this._productService = _productService;
        this.rutas = rutas;
        this.toastr = toastr;
        this.aRouter = aRouter;
        this.loadig = false;
        this.operacion = 'Agregar ';
        this.form = this.fb.group({
            id: [null],
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            precio: [null, Validators.required],
            stock: [null, Validators.required],
        });
        this.id = Number(aRouter.snapshot.paramMap.get('id'));
    }
    ngOnInit() {
        if (this.id != 0) {
            //es editar
            this.operacion = 'Editar ';
            this.getProduct(this.id);
        }
    }
    getProduct(id) {
        this.loadig = true;
        this._productService.getProduct(id).subscribe((data) => {
            this.loadig = false;
            this.form.patchValue({
                nombre: data.nombre,
                descripcion: data.descripcion,
                precio: data.precio,
                stock: data.stock
            });
        });
    }
    addProducto() {
        console.log(this.form.value.nombre);
        const producto = {
            id: this.form.value.id,
            nombre: this.form.value.nombre,
            descripcion: this.form.value.descripcion,
            precio: this.form.value.precio,
            stock: this.form.value.stock,
        };
        if (this.id !== 0) {
            //Editar
            this.loadig = true;
            producto.id = this.id;
            this._productService.updateProdcut(this.id, producto).subscribe(() => {
                this.loadig = false;
                this.toastr.info(`el producto ${producto.nombre} fue Actulizado con exito`, 'Producto Actulizado');
                this.rutas.navigate(['/']);
            });
        }
        else {
            //Agregar
            this.loadig = true;
            this._productService.saveProducto(producto).subscribe(() => {
                this.loadig = false;
                this.toastr.success(`el producto ${producto.nombre} fue registrado con exito`, 'producto registrado');
                this.rutas.navigate(['/']);
            });
        }
    }
};
AgregarEditarComponent = __decorate([
    Component({
        selector: 'app-agregar-editar',
        templateUrl: './agregar-editar.component.html',
        styleUrls: ['./agregar-editar.component.css']
    })
], AgregarEditarComponent);
export { AgregarEditarComponent };
//# sourceMappingURL=agregar-editar.component.js.map