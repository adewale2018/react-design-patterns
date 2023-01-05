import SplitScreen from './components/SplitScreen/SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'steelblue' }}>Left!</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'orangered' }}>Right!</h1>;
};

const App = () => {
  return (
    <SplitScreen leftWeight={3} rightWeight={5}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
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
