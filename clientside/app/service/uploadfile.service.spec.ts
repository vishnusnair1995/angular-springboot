import { TestBed } from '@angular/core/testing';

import { UploadFileService } from './uploadfile.service';

describe('UploadfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadFileService = TestBed.get(UploadFileService);
    expect(service).toBeTruthy();
  });
});
