import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndSkillsComponent } from './experience-and-skills.component';

describe('ExperienceAndSkillsComponent', () => {
  let component: ExperienceAndSkillsComponent;
  let fixture: ComponentFixture<ExperienceAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceAndSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
