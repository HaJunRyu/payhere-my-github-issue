import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationSection = styled.section`
  margin: 2.4rem 0;
`;

export const Pagination = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const PageList = styled.ol`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const PageNumber = styled.li`
  width: 10%;
  padding: 0 0.6rem;
  border-left: 0.1rem solid #e8e8e8;

  &:last-of-type {
    border-right: 0.1rem solid #e8e8e8;
  }
`;

export const PageChangeButton = styled.button<{ isCurrentPage: boolean }>`
  ${({ isCurrentPage }) => css`
    width: 100%;
    padding: 1rem 0;
    flex-grow: 1;
    background: ${isCurrentPage ? '#0969da' : 'transparent'};
    color: ${isCurrentPage ? '#ffffff' : '#000000'};
    border-radius: 10%;
    font-weight: 700;
  `}
`;

export const PageRangeChangeButton = styled.button`
  background: transparent;

  &:first-of-type {
    padding-right: 1rem;
  }

  &:last-of-type {
    padding-left: 1rem;
  }
`;
