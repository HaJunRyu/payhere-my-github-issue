import * as Styled from './Navigation.styled';
import { ReactComponent as Home } from '@/assets/svg/home.svg';
import { ReactComponent as Warning } from '@/assets/svg/warning.svg';
import { ReactComponent as Search } from '@/assets/svg/search.svg';
import { ROUTE } from '@/constants/route';

const Navigation = () => {
  return (
    <Styled.Navigation>
      <Styled.NavigateLink to={ROUTE.HOME}>
        <Home />
      </Styled.NavigateLink>
      <Styled.NavigateLink to={ROUTE.ISSUES}>
        <Warning />
      </Styled.NavigateLink>
      <Styled.NavigateLink to={ROUTE.SEARCH}>
        <Search />
      </Styled.NavigateLink>
    </Styled.Navigation>
  );
};

export default Navigation;
