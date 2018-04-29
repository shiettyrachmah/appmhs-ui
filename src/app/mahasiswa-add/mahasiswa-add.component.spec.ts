import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaAddComponent } from './mahasiswa-add.component';

describe('MahasiswaAddComponent', () => {
  let component: MahasiswaAddComponent;
  let fixture: ComponentFixture<MahasiswaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
