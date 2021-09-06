import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Text } from '../Typography/Text';
import { StyledInput } from '../Input';
import { Wrapper } from '../Wrapper';

export function FreeCodeSetAModal({ callbackState }) {
  const [FreeCodeToggle, setFreeCodeToggle] = useState(false);

  return (
    <ModalLayout>
      <ModalDialogContainer>
        <Wrapper spaceY="3rem">
          <Wrapper spaceY="0.5rem">
            <Text sm bold color="#6B7280" style={{ marginBottom: '0' }}>
              Enter Set A Code
            </Text>
            <StyledInput />
          </Wrapper>
          <Wrapper flex justifyContent="flex-end" spaceX="1rem">
            <CancelButton
              onClick={() => {
                setFreeCodeToggle(!FreeCodeToggle);
                callbackState(FreeCodeToggle);
              }}
            >
              Cancel
            </CancelButton>
            <Button>Use</Button>
          </Wrapper>
        </Wrapper>
      </ModalDialogContainer>
    </ModalLayout>
  );
}

export function FreeCodeSetBModal({ callbackState }) {
  const [FreeCodeToggle, setFreeCodeToggle] = useState(false);

  return (
    <ModalLayout>
      <ModalDialogContainer>
        <Wrapper spaceY="3rem">
          <Wrapper spaceY="0.5rem">
            <Text sm bold color="#6B7280" style={{ marginBottom: '0' }}>
              Enter Set B Code
            </Text>
            <StyledInput />
          </Wrapper>
          <Wrapper flex justifyContent="flex-end" spaceX="1rem">
            <CancelButton
              onClick={() => {
                setFreeCodeToggle(!FreeCodeToggle);
                callbackState(FreeCodeToggle);
              }}
            >
              Cancel
            </CancelButton>
            <Button>Use</Button>
          </Wrapper>
        </Wrapper>
      </ModalDialogContainer>
    </ModalLayout>
  );
}

const ModalAnimationForwards = keyframes`
    from {
        transform: translateY(-10rem);
        opacity: 0;
    }

    to {
        transform: translateY(-7rem);
        opacity: 1;
    }
`;

const ModalLayout = styled.div`
  background-color: #000000aa;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDialogContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  width: 30rem;
  border-radius: 0.675rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  animation: ${ModalAnimationForwards} 0.4s forwards;
`;

const Button = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;
  background-color: #4338ca;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #fff;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;

  &:hover {
    background-color: #4f46e5;
  }

  &:active {
    background-color: #4338ca;
  }
`;

const CancelButton = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;
  background-color: #f3f4f6;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #4b5563;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;

  &:hover {
    background-color: #e5e7eb;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;
