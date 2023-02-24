import { IssueItem } from '@/types/dto/issues';
import * as Styled from './Issue.styled';

export interface IssueType extends IssueItem {
  repoName: string;
}

interface IssueProps {
  issue: IssueType;
}

const Issue = ({ issue }: IssueProps) => {
  const { html_url, title, repoName } = issue;
  return (
    <Styled.Issue>
      <a href={html_url} target="_blank" rel="noreferrer">
        <Styled.IssueTitle>{title}</Styled.IssueTitle>
      </a>
      <Styled.RepoName>{repoName}</Styled.RepoName>
    </Styled.Issue>
  );
};

export default Issue;
