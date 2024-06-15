import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
let ProductoService = class ProductoService {
    constructor(http) {
        this.http = http;
        //Almacenamos localhost3000
        this.myappUrl = environment.endpoint;
        this.myapiUrl = 'api/productos/';
    }
    //Listar Producto
    getListProducts() {
        return this.http.get(`${this.myappUrl}${this.myapiUrl}`);
    }
    //Eliminar Producto
    deleteProducto(id) {
        return this.http.delete(`${this.myappUrl}${this.myapiUrl}${id}`);
    }
    //Agregar producto
    saveProducto(producto) {
        return this.http.post(`${this.myappUrl}${this.myapiUrl}`, producto);
    }
    getProduct(id) {
        return this.http.get(`${this.myappUrl}${this.myapiUrl}${id}`);
    }
    //Actualizar
    updateProdcut(id, product) {
        return this.http.put(`${this.myappUrl}${this.myapiUrl}${id}`, product);
    }
};
ProductoService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductoService);
export { ProductoService };
//# sourceMappingURL=producto.service.js.map