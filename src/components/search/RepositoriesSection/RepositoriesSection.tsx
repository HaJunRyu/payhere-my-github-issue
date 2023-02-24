import { Repositories, ScreenReaderOnly } from '@/components/common';
import { SearchedRepositories } from '@/pages/Search';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Styled from './RepositoriesSection.styled';

interface RepositoriesSectionProps {
  searchedRepositories: SearchedRepositories;
}

const RepositoriesSection = ({ searchedRepositories }: RepositoriesSectionProps) => {
  const { repositories } = searchedRepositories;

  return (
    <Styled.RepositoriesSection>
      <ScreenReaderOnly as="h2">Repositories</ScreenReaderOnly>
      <Repositories repositories={repositories} />
    </Styled.RepositoriesSection>
  );
};

export default RepositoriesSection;
