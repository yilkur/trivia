import { StyledAnswersWrapper, StyledAnswerButton } from './StyledComponents'
import { useState } from 'react'

const Answers = ({ answers, questionIdx, getAnswers, isChecked, correctAnswers }) => {
  const initialSelectedState = [false, false, false, false]
  const [selected, setSelected] = useState(initialSelectedState)
  const handleClick = (buttonIdx, answerText) => {
    const modifiedSelected = selected.map((answer, idx) => {
      if (buttonIdx === idx) {
        return !answer
      } else {
        return false
      }
    })
    setSelected(modifiedSelected)

    getAnswers(answerText, questionIdx)
  }

  return (
    <StyledAnswersWrapper>
      {answers.map((answer, buttonIdx) => (
        <StyledAnswerButton
          key={buttonIdx}
          dangerouslySetInnerHTML={{ __html: answer }}
          isSelected={selected[buttonIdx]}
          onClick={() => handleClick(buttonIdx, answer)}
          isCorrect={correctAnswers[questionIdx] === answer}
          isChecked={isChecked}
        />
      ))}
    </StyledAnswersWrapper>
  )
}

export default Answers
