import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  margin-bottom: 1.6rem;
`;

export const BookIsEmptyContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3rem 0;
`;

export const EmptyMessage = styled.em`
  font-style: normal;
  font-size: 3rem;
  font-weight: 700;
`;

export const GoToSearchPage = styled(Link)`
  margin-top: 3rem;
  padding: 1.2rem;
  font-size: 2rem;
  background: #0969da;
  color: #ffffff;
  border-radius: 0.6rem;
`;
