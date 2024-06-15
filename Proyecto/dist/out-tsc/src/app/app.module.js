import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//MODULOS
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
//COMPONENTES
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListarComponent } from './componentes/listar/listarProducto/listar.component';
import { AgregarEditarComponent } from './componentes/agregar-editar-Producto/agregar-editar.component';
import { Error404Component } from './componentes/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            ListarComponent,
            AgregarEditarComponent,
            Error404Component,
            ProgressBarComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            HttpClientModule,
            BrowserAnimationsModule, // required animations module
            ToastrModule.forRoot({
                timeOut: 10000,
                positionClass: 'toast-bottom-right',
            }), // ToastrModule added
        ],
        providers: [
            provideClientHydration()
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map