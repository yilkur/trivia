import Answers from './Anwers'
import { useState, useMemo } from 'react'
import { StyledFooterWrapper } from './StyledComponents'

const Quiz = ({ data, startQuiz, error }) => {
  const [score, setScore] = useState(0)
  const correctAnswers = data.map(entry => entry.correct_answer)
  const shuffledAnswers = useMemo(
    () =>
      data.map(entry => {
        const incorrectAnswers = entry.incorrect_answers
        const correctAnswer = entry.correct_answer
        const shuffledAnswers = [...incorrectAnswers, correctAnswer].sort(
          (a, b) => 0.5 - Math.random()
        )
        return shuffledAnswers
      }),
    [data]
  )

  const [isChecked, setIsChecked] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState(['', '', '', '', ''])

  const getAnswers = (answerText, questionIdx) => {
    const modifiedSelectedAnswers = selectedAnswers.map((answer, idx) => {
      if (questionIdx === idx) {
        return answerText
      } else {
        return answer
      }
    })
    setSelectedAnswers(modifiedSelectedAnswers)
  }

  const checkAnswers = answers => {
    setIsChecked(true)

    answers.forEach(
      answer =>
        correctAnswers.includes(answer) && setScore(prevScore => prevScore + 1)
    )
  }

  return (
    <div>
      {error && <h2>{error}</h2>}
      {data.map((entry, idx) => (
        <div key={idx}>
          <h3 dangerouslySetInnerHTML={{ __html: entry.question }} />
          <Answers
            answers={shuffledAnswers[idx]}
            questionIdx={idx}
            getAnswers={getAnswers}
            isChecked={isChecked}
            correctAnswers={correctAnswers}
          />
          <hr />
        </div>
      ))}
      <StyledFooterWrapper>
        {isChecked ? (
          <button onClick={startQuiz}>Play again</button>
        ) : (
          <button onClick={() => checkAnswers(selectedAnswers)}>
            Check answers
          </button>
        )}

        {isChecked && (
          <h3>
            You scored: {score} of {data.length}
          </h3>
        )}
      </StyledFooterWrapper>
    </div>
  )
}

export default Quiz
