import type { Component } from 'solid-js';
import styled from '@holiday-lab/cheese';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Basic: Component = () => (
  <div>
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  </div>
);

export default Basic;
