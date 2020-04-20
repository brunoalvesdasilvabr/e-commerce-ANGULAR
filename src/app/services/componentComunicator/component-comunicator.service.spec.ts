import { TestBed } from '@angular/core/testing';

import { ComponentComunicatorService } from './component-comunicator.service';

describe('ComponentComunicatorService', () => {
  let service: ComponentComunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentComunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
