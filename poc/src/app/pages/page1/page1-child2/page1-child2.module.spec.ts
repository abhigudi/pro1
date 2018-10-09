import { Page1Child2Module } from './page1-child2.module';

describe('Page1Child2Module', () => {
  let page1Child2Module: Page1Child2Module;

  beforeEach(() => {
    page1Child2Module = new Page1Child2Module();
  });

  it('should create an instance', () => {
    expect(page1Child2Module).toBeTruthy();
  });
});
