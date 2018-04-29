import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaUpdateComponent } from './mahasiswa-update.component';

describe('MahasiswaUpdateComponent', () => {
  let component: MahasiswaUpdateComponent;
  let fixture: ComponentFixture<MahasiswaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
