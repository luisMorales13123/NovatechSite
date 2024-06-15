import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Componentes
import { ListarComponent } from './componentes/listar/listarProducto/listar.component';
import { AgregarEditarComponent } from './componentes/agregar-editar-Producto/agregar-editar.component';
import { Error404Component } from './componentes/error404/error404.component';
const routes = [
    { path: '', component: ListarComponent },
    { path: 'agregar', component: AgregarEditarComponent },
    { path: 'editar/:id', component: AgregarEditarComponent },
    { path: '**', component: Error404Component, }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map