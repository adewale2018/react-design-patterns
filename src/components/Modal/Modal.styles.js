import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;
