import { SubpageCommonModule } from './subpage-common.module';

describe('SubpageCommonModule', () => {
  let subpageCommonModule: SubpageCommonModule;

  beforeEach(() => {
    subpageCommonModule = new SubpageCommonModule();
  });

  it('should create an instance', () => {
    expect(subpageCommonModule).toBeTruthy();
  });
});
