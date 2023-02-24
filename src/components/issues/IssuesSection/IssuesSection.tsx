import { Issue } from '@/components/issues';
import { IssueType } from '../Issue/Issue';
import * as Styled from './IssuesSection.styled';

interface IssuesSectionProps {
  issues: IssueType[];
}

const IssuesSection = ({ issues }: IssuesSectionProps) => {
  return (
    <Styled.Issues>
      {issues.map(issue => (
        <Issue issue={issue} key={issue.html_url} />
      ))}
    </Styled.Issues>
  );
};

export default IssuesSection;
