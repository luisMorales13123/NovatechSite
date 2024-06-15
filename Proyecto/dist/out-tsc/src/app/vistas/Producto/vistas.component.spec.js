import { TestBed } from '@angular/core/testing';
import { VistasComponent } from './vistas.component';
describe('VistasComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VistasComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(VistasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=vistas.component.spec.js.map