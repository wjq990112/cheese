import type { Styled } from './types';
import createStyledComponent from './factory';
import tags from './tags';

const styled = createStyledComponent as Styled;

tags.forEach((tag) => {
  styled[tag] = styled(tag);
});

export default styled;
