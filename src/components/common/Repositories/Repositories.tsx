import { Repository } from '@/components/common';
import type { RepositoryType } from '@/components/common/Repository/Repository';
import * as Styled from './Repositories.styled';

interface RepositoriesProps {
  repositories: RepositoryType[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {
  return (
    <Styled.Repositories>
      {repositories.map(repositoryProps => {
        return <Repository key={repositoryProps.full_name} {...repositoryProps} />;
      })}
    </Styled.Repositories>
  );
};

export default Repositories;
