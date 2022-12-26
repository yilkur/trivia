import styled from 'styled-components'

export const StyledAnswerButton = styled.button`
  font-size: 1.4rem;
  background-color: ${({ isChecked, isSelected, isCorrect }) =>
    isChecked
      ? isSelected
        ? '#94D7A2'
        : isCorrect && !isSelected
        ? '#F8BCBC'
        : 'white'
      : isSelected
      ? '#D6DBF5'
      : 'white'};
  border: 1px solid #4d5b9e;
  opacity: ${({isChecked, isCorrect, isSelected}) => isChecked && !isCorrect && !isSelected ? 0.7 : 1};
  color: #293264;
  padding: 0.5rem 2rem;
  border-radius: 500px; // very large value to keep pill shape
  margin-top: 0;

  :hover {
    color: #fff;
  }
`

export const StyledAnswersWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const StyledStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledStartButton = styled.button``

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledLoadingText = styled.h1`
  text-align: center;
`
