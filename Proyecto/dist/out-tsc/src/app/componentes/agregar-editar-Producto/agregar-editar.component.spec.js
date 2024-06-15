import { TestBed } from '@angular/core/testing';
import { AgregarEditarComponent } from './agregar-editar.component';
describe('AgregarEditarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AgregarEditarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AgregarEditarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agregar-editar.component.spec.js.map