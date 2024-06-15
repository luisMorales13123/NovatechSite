import { TestBed } from '@angular/core/testing';
import { Error404Component } from './error404.component';
describe('Error404Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Error404Component]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Error404Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=error404.component.spec.js.map