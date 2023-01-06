import UnControlledOnboarding from './components/ControlledAndUnControlledComponents/UnControlledUnboarding';

const StepOne = ({ goToNext }) => (
  <>
    <h1>STEP ONE</h1>
    <button onClick={() => goToNext({ name: 'Saheed'})}>Next</button>
  </>
);

const StepTwo = ({ goToNext, goToPrev }) => (
  <>
    <h1>STEP TWO</h1>
    <button onClick={() => goToNext ({ age: 39})}>Next</button>
    <button onClick={goToPrev}>Prev</button>
  </>
);

const StepThree = ({ goToNext, goToPrev }) => (
  <>
    <h1>STEP THREE</h1>
    <button onClick={() => goToNext({ hairColor: 'brown'})}>Next</button>
    <button onClick={goToPrev}>Prev</button>
  </>
);

const App = () => {
  return (
    <>
      <UnControlledOnboarding onFinish={data => console.log('DATA>>>', data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledOnboarding>
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
