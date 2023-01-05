import { people, products } from './DummyData';

import LargePersonListItem from './components/List/people/LargePeopleListItem';
import LargeProductListItem from './components/List/products/LargeProductItem';
import Modal from './components/Modal/Modal';
import NumberedList from './components/List/NumberedList';
import RegularList from './components/List/RegularList';
import SmallPeopleListItem from './components/List/people/SmallPeopleListItem';
import SmallProductListItem from './components/List/products/SmallProductItem';

const App = () => {
  return (
    <>
      <Modal>
      <LargeProductListItem
        product={products[0]}
      />
      </Modal>
     
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
