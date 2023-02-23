import { Repositories, ScreenReaderOnly } from '@/components/common';
import { RepositoryType } from '@/components/common/Repository/Repository';
import * as Styled from './RepositoriesSection.styled';

interface RepositoriesSectionProps {
  repositories: RepositoryType[];
}

const RepositoriesSection = ({ repositories }: RepositoriesSectionProps) => {
  return (
    <Styled.RepositoriesSection>
      <ScreenReaderOnly as="h2">Repositories</ScreenReaderOnly>
      <Repositories repositories={repositories} />
    </Styled.RepositoriesSection>
  );
};

export default RepositoriesSection;
