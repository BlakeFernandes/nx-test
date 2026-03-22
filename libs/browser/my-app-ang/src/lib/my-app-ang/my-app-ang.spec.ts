import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAppAng } from './my-app-ang';

describe('MyAppAng', () => {
  let component: MyAppAng;
  let fixture: ComponentFixture<MyAppAng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAppAng],
    }).compileComponents();

    fixture = TestBed.createComponent(MyAppAng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
