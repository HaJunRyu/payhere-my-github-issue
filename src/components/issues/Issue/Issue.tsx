import { IssueItem } from '@/types/dto/issues';
import * as Styled from './Issue.styled';

export interface Issue extends IssueItem {
  repoName: string;
}

interface IssueProps {
  issue: Issue;
}

const Issue = ({ issue }: IssueProps) => {
  const { html_url, title, body, repoName } = issue;
  return (
    <Styled.Issue>
      <a href={html_url} target="_blank" rel="noreferrer">
        <Styled.IssueTitle>{title}</Styled.IssueTitle>
      </a>
      <Styled.RepoName>Repository: {repoName}</Styled.RepoName>
      <Styled.Description>{body}</Styled.Description>
    </Styled.Issue>
  );
};

export default Issue;
