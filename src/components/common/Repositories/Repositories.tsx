import { Repository } from '@/components/common';
import type { RepositoryType } from '@/components/common/Repository/Repository';
import * as Styled from './Repositories.styled';

interface RepositoriesProps {
  repositories: RepositoryType[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {
  return (
    <Styled.Repositories>
      {repositories.map(repository => {
        return <Repository key={repository.full_name} repository={repository} />;
      })}
    </Styled.Repositories>
  );
};

export default Repositories;
