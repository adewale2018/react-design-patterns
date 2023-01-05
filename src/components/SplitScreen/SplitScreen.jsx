import { Container, Pane } from './SplitScreen.styles';

// const SplitScreen = ({ left: Left, right: Right, leftWeight = 1, rightWeight = 1 }) => {
const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
      {/* <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane> */}
    </Container>
  );
};

export default SplitScreen;
