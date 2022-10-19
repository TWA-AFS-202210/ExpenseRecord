import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllistComponent } from './fulllist.component';

describe('FulllistComponent', () => {
  let component: FulllistComponent;
  let fixture: ComponentFixture<FulllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
