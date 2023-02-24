import styled from '@emotion/styled';
import { ReactComponent as PlusSvg } from '@/assets/svg/plus.svg';
import { ReactComponent as TrashSvg } from '@/assets/svg/trash.svg';

export const Issue = styled.li`
  position: relative;
  padding: 1.6rem;
  width: 100%;
  border: 0.1rem solid #d0d7de;
  border-radius: 0.6rem;
`;

export const IssueTitle = styled.h3`
  display: inline-block;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const RepoName = styled.p`
  margin: 0.8rem 0 0;
  font-size: 1.4rem;
`;
