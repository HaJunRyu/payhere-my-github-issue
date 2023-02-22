import styled from '@emotion/styled';

export const ScreenReaderOnly = styled.div`
  position: absolute;
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  margin: -0.1rem;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
`;
