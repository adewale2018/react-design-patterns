import { people, products } from './DummyData';

import LargePersonListItem from './components/List/people/LargePeopleListItem';
import LargeProductListItem from './components/List/products/LargeProductItem';
import NumberedList from './components/List/NumberedList';
import RegularList from './components/List/RegularList';
import SmallPeopleListItem from './components/List/people/SmallPeopleListItem';
import SmallProductListItem from './components/List/products/SmallProductItem';

const App = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName='person'
        itemComponent={SmallPeopleListItem}
      />
      <RegularList
        items={people}
        resourceName='person'
        itemComponent={LargePersonListItem}
      />
      <hr />
      <RegularList
        items={products}
        resourceName='product'
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName='product'
        itemComponent={LargeProductListItem}
      />
      <RegularList
        items={products}
        resourceName='product'
        itemComponent={LargeProductListItem}
      />
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
