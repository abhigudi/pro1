import { Page1Child1Module } from './page1-child1.module';

describe('Page1Child1Module', () => {
  let page1Child1Module: Page1Child1Module;

  beforeEach(() => {
    page1Child1Module = new Page1Child1Module();
  });

  it('should create an instance', () => {
    expect(page1Child1Module).toBeTruthy();
  });
});
