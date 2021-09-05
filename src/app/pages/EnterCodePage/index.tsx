import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// Guest Layout Components
import { GuestLayout } from '../../components/Layouts/Guest';
import { GuestContent } from '../../components/Layouts/Guest/Content';
import { GuestFooter } from '../../components/Layouts/Guest/Footer';

// App Components
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';
import { StyledCard } from '../../components/Elements/Card';
import { Wrapper } from '../../components/Elements/Wrapper';
import { FreeCodeSetAModal } from '../../components/Elements/Modals';
import { FreeCodeSetBModal } from '../../components/Elements/Modals';

export function EnterCodePage() {
  const [toggleModalSetA, setToggleModalSetA] = useState(false);
  const [toggleModalSetB, setToggleModalSetB] = useState(false);
  return (
    <GuestLayout>
      <Helmet>
        <title>Enter Code</title>
      </Helmet>
      <GuestContent>
        <ResponsiveWrapper
          flex
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Card>
            <Wrapper spaceY="1rem">
              <Wrapper flex flexDirection="column" alignItems="center">
                <Title xl2 extrabold color="#2A41CB">
                  Examination Sets
                </Title>
              </Wrapper>
              <Wrapper spaceY="3rem">
                <Wrapper flex flexDirection="column" spaceY="0.375rem">
                  <Text sm bold color="#6B7280" style={{ marginBottom: '0' }}>
                    Set A
                  </Text>
                  <Wrapper spaceY="0.625rem">
                    <Select>
                      <option value="" hidden>
                        Select Set A
                      </option>
                      <option value="">A - 1</option>
                      <option value="">A - 2</option>
                      <option value="">A - 3</option>
                      <option value="">A - 4</option>
                      <option value="">A - 5</option>
                    </Select>
                    <Button
                      onClick={() => setToggleModalSetA(!toggleModalSetA)}
                    >
                      Enter Code
                    </Button>
                  </Wrapper>
                </Wrapper>

                <Wrapper flex flexDirection="column" spaceY="0.375rem">
                  <Text sm bold color="#6B7280" style={{ marginBottom: '0' }}>
                    Set B
                  </Text>
                  <Wrapper spaceY="0.625rem">
                    <Select>
                      <option value="" hidden>
                        Select Set B
                      </option>
                      <option value="">B - 1</option>
                      <option value="">B - 2</option>
                      <option value="">B - 3</option>
                      <option value="">B - 4</option>
                      <option value="">B - 5</option>
                    </Select>
                    <Button
                      onClick={() => setToggleModalSetB(!toggleModalSetB)}
                    >
                      Enter Code
                    </Button>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Card>
        </ResponsiveWrapper>
      </GuestContent>
      <GuestFooter>
        <Text xs medium color="#9CA3AF">
          &copy;Copyright 2021. RevApp All rights reserved.
        </Text>
      </GuestFooter>
      {toggleModalSetA && (
        <FreeCodeSetAModal
          callbackState={freeCodeModalState =>
            setToggleModalSetA(freeCodeModalState)
          }
        />
      )}
      {toggleModalSetB && (
        <FreeCodeSetBModal
          callbackState={freeCodeModalState =>
            setToggleModalSetB(freeCodeModalState)
          }
        />
      )}
    </GuestLayout>
  );
}

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    width: 23rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2.5rem 1.2rem 0.875rem;
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const ResponsiveWrapper = styled(Wrapper)`
  @media (min-width: 500px) {
    align-items: center;
  }
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Select = styled.select`
  padding: 0.625rem 1rem;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;

  &:focus {
    border: 2px solid #4338ca;
    background-color: #fff;
  }
`;
