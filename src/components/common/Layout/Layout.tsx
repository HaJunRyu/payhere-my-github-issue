import { PropsWithChildren } from 'react';
import * as Styled from './Layout.styled';

const Layout = ({ children }: PropsWithChildren) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default Layout;
