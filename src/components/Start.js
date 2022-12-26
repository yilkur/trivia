import { StyledStart } from './StyledComponents'

const Start = ({ startQuiz }) => (
  <StyledStart>
    <h1>Quizzical</h1>
    <p>Some description if needed</p>
    <button onClick={startQuiz}>Start quiz</button>
  </StyledStart>
)

export default Start
