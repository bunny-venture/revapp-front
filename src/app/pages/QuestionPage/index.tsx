import React from 'react';
import styled from 'styled-components';

import { GuestLayout } from '../../components/Layouts/Guest';
import { Text } from '../../components/Elements/Typography/Text';
import { Title } from '../../components/Elements/Typography/Title';
import { Wrapper } from '../../components/Elements/Wrapper';

import SituationQuestion from '../../components/Elements/Questions/Situation';
import Question from '../../components/Elements/Questions/Question';
import { Choices } from '../../components/Elements/Choices';

export function QuestionPage() {
  return (
    <GuestLayout>
      <Header>
        <Wrapper
          flex
          flexDirection="column"
          alignItems="center"
          spaceY="0.375rem"
        >
          <Title bold color="#2A41CB">
            Set A - 1
          </Title>
          <Text lg bold color="#2A41CB">
            Question 1/50
          </Text>
        </Wrapper>
      </Header>
      <Main>
        <Container>
          <Wrapper spaceY="1.5rem">
            <SituationQuestion
              body={
                'A mother in labor told the nurse that she was expecting that her baby has no chance to survive and expects that the baby will be born dead. The mother accepts the fate of the baby and informs the nurse that when the baby is born and requires resuscitation, the mother refuses any treatment to her baby and expresses hostility toward the nurse while the pediatric team is taking care of the baby.'
              }
            />
            <Question body={'The nurse is legally obligated to:'} />
            <ChoicesGroup>
              <Choices
                groupName={'choices'}
                indexName={'A'}
                letter={'A'}
                statement={
                  'Notify the pediatric team that the mother has refused resuscitation and any treatment for the baby and take the baby to the mother.'
                }
                click={() => console.log('Letter A')}
              />
              <Choices
                groupName={'choices'}
                indexName={'B'}
                letter={'B'}
                statement={
                  'Get a court order making the baby a ward of the court.'
                }
                click={() => console.log('Letter B')}
              />
              <Choices
                groupName={'choices'}
                indexName={'C'}
                letter={'C'}
                statement={
                  'Record the statement of the mother, notify the pediatric team, and observe carefully for signs of impaired bonding and neglect as a reasonable suspicion of child abuse.'
                }
                click={() => console.log('Letter C')}
              />
              <Choices
                groupName={'choices'}
                indexName={'D'}
                letter={'D'}
                statement={
                  'Do nothing except record the mother’s statement in the medical record.'
                }
                click={() => console.log('Letter D')}
              />
            </ChoicesGroup>
            <Button>Submit</Button>
          </Wrapper>
        </Container>
      </Main>
    </GuestLayout>
  );
}

const Header = styled.header`
  padding: 0.875rem;
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  height: 100%;
  padding: 2rem 0;
`;

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 800px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1100px) {
    width: 50%;
  }
`;

const ChoicesGroup = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 100%;
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

// const Choices = styled.input``;

// const ChoicesContainer = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid #d1d5db;
//   border-radius: 0.375rem;
//   padding: 0.875rem;
//   cursor: pointer;

//   & > * + * {
//     margin-left: 0.875rem;
//   }
// `;

// const ChoicesGroup = styled.div`
//   & > * + * {
//     margin-top: 1rem;
//   }
// `;

// const Label = styled.label`
//   width: 90%;
//   font-weight: 500;
//   cursor: pointer;
// `;

// const LetterChoice = styled(Text)`
//   margin-right: 0.375rem;
// `;

// const QuizContainer = styled.div`
//   width: 50%;
//   margin: 0 auto;
// `;

/* <Title bold color="#2A41CB">
        Set A - 1
      </Title>
      <Text bold color="#2A41CB">
        Question 1/50
      </Text>
      <QuizContainer>
        <Wrapper>
          <Text bold color="#2A41CB">
            Situation:
          </Text>
          <Text medium>
            A mother in labor told the nurse that she was expecting that her
            baby has no chance to survive and expects that the baby will be born
            dead. The mother accepts the fate of the baby and informs the nurse
            that when the baby is born and requires resuscitation, the mother
            refuses any treatment to her baby and expresses hostility toward the
            nurse while the pediatric team is taking care of the baby.
          </Text>
        </Wrapper>
        <Text bold color="#2A41CB">
          Question:
        </Text>
        <Text bold>The nurse is legally obligated to:</Text>
        <ChoicesGroup>
          <ChoicesContainer>
            <Choices type="radio" name="choices" id="choicesA" />
            <Wrapper flex alignItems="">
              <LetterChoice bold>A.</LetterChoice>
              <Label htmlFor="choicesA">
                {
                  'Notify the pediatric team that the mother has refused resuscitation and any treatment for the baby and take the baby to the mother.'
                }
              </Label>
            </Wrapper>
          </ChoicesContainer>
          <ChoicesContainer>
            <Choices type="radio" name="choices" id="choicesB" />
            <Wrapper flex>
              <LetterChoice bold>B.</LetterChoice>
              <Label htmlFor="choicesB">
                {'Get a court order making the baby a ward of the court.'}
              </Label>
            </Wrapper>
          </ChoicesContainer>
          <ChoicesContainer>
            <Choices type="radio" name="choices" id="choicesC" />
            <Wrapper flex>
              <LetterChoice bold>C.</LetterChoice>
              <Label htmlFor="choicesC">
                {
                  'Record the statement of the mother, notify the pediatric team, and observe carefully for signs of impaired bonding and neglect as a reasonable suspicion of child abuse.'
                }
              </Label>
            </Wrapper>
          </ChoicesContainer>
          <ChoicesContainer>
            <Choices type="radio" name="choices" id="choicesD" />
            <Wrapper flex>
              <LetterChoice bold>D.</LetterChoice>
              <Label htmlFor="choicesD">
                {
                  'Do nothing except record the mother’s statement in the medical record.'
                }
              </Label>
            </Wrapper>
          </ChoicesContainer>
        </ChoicesGroup>
      </QuizContainer> */
