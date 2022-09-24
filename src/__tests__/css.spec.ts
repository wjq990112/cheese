import { css } from '../css';

describe('css', () => {
  it('should return a hashed classname', () => {
    expect(
      css`
        color: red;
      `
    ).toMatchInlineSnapshot('"skkcyc"');
  });
});
