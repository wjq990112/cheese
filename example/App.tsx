import type { Component } from 'solid-js';
import styled from '@holiday-lab/cheese';
import Basic from './basic';
import WithProps from './with-props';
import Extend from './extend';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: Component = () => {
  return (
    <Wrapper>
      <Basic />
      <WithProps />
      <Extend />
    </Wrapper>
  );
};

export default App;
