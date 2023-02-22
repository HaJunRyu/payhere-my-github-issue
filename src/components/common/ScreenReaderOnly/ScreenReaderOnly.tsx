import { ElementType, ReactNode } from 'react';
import * as Styled from './ScreenReaderOnly.styled';

interface ScreenReaderOnlyProps {
  as: ElementType;
  children: ReactNode;
}

const ScreenReaderOnly = ({ as, children }: ScreenReaderOnlyProps) => {
  return <Styled.ScreenReaderOnly as={as}>{children}</Styled.ScreenReaderOnly>;
};

export default ScreenReaderOnly;
