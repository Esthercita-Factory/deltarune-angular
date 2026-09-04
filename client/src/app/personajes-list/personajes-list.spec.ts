import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajesList } from './personajes-list';

describe('PersonajesList', () => {
  let component: PersonajesList;
  let fixture: ComponentFixture<PersonajesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesList],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
