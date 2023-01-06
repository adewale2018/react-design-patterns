import { people, products } from './DummyData';

import CurrentUserLoader from './components/ContainerComponents/CurrentUserLoader';
import LargePersonListItem from './components/List/people/LargePeopleListItem';
import LargeProductListItem from './components/List/products/LargeProductItem';
import Modal from './components/Modal/Modal';
import NumberedList from './components/List/NumberedList';
import RegularList from './components/List/RegularList';
import SmallPeopleListItem from './components/List/people/SmallPeopleListItem';
import SmallProductListItem from './components/List/products/SmallProductItem';
import UserInfo from './components/ContainerComponents/UsersInfo/UsersInfo';
import UserLoader from './components/ContainerComponents/UserLoader';

const App = () => {
  return (
    <>
      <UserLoader userId='24434'>
        <UserInfo />
      </UserLoader>
      <UserLoader userId='2094'>
        <UserInfo />
      </UserLoader>
      <UserLoader userId='20012'>
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={3}
      rightWeight={5}
    /> */
}
