import styled from '@emotion/styled';
import { ReactComponent as PlusSvg } from '@/assets/svg/plus.svg';
import { ReactComponent as TrashSvg } from '@/assets/svg/trash.svg';

export const Repository = styled.li`
  position: relative;
  padding: 1.6rem;
  width: 100%;
  border: 0.1rem solid #d0d7de;
  border-radius: 0.6rem;
`;

export const RepoName = styled.h3`
  font-size: 1.4rem;
`;

export const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Language = styled.span`
  font-size: 1.2rem;
`;

export const Stargazer = styled.div`
  display: flex;
  align-items: end;
  gap: 0.2rem;
`;

export const StarCount = styled.span`
  font-size: 1.2rem;
`;

export const BookMarkWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const BookMark = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Plus = styled(PlusSvg)`
  width: 1.6rem;
`;

export const Trash = styled(TrashSvg)`
  width: 1.6rem;
`;
