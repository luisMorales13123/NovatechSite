import { TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
describe('ProgressBarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProgressBarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ProgressBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=progress-bar.component.spec.js.map