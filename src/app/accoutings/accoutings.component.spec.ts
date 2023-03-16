import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutingsComponent } from './accoutings.component';

xdescribe('AccoutingsComponent', () => {
  let component: AccoutingsComponent;
  let fixture: ComponentFixture<AccoutingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoutingsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
