import { Article } from './articles';

describe('Articles', () => {
  it('should be defined', () => {
    expect(new Article()).toBeDefined();
  });
});
