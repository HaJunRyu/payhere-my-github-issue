import { Issue } from '@/components/issues';
import * as Styled from './IssuesSection.styled';

interface IssuesSectionProps {}

const dummyIssues = [
  {
    html_url: 'https://github.com/mash-up-kr/mash-up-recruit-fe/issues/51',
    title: 'react good',
    body: 'blablablablablablablablablablablablablablablablablablablabla',
    repoName: 'facebook/react',
  },
  {
    html_url: 'https://github.com/mash-up-kr/mash-up-recruit-fe/issues/211',
    title: 'react gooood',
    body: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
    repoName: 'facebook/react-native',
  },
];

const IssuesSection = ({}: IssuesSectionProps) => {
  return (
    <Styled.Issues>
      {dummyIssues.map(issue => (
        <Issue issue={issue} key={issue.html_url} />
      ))}
    </Styled.Issues>
  );
};

export default IssuesSection;
