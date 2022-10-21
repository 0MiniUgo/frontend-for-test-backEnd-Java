import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerModalRemoveComponent } from './player-modal-remove.component';

describe('PlayerModalRemoveComponent', () => {
  let component: PlayerModalRemoveComponent;
  let fixture: ComponentFixture<PlayerModalRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerModalRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerModalRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
