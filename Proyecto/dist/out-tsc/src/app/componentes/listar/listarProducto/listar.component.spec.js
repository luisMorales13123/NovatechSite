import { TestBed } from '@angular/core/testing';
import { ListarComponent } from './listar.component';
describe('ListarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ListarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar.component.spec.js.map