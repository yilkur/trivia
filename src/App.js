import { useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import GlobalStyles from './GlobalStyles'
import {StyledLoadingText} from './components/StyledComponents'

const App = () => {
  const [data, setData] = useState(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const startQuiz = async () => {
    setHasStarted(true)
    setIsLoading(true)

    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple'
      )

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }

      const result = await response.json()

      setData(result.results)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <GlobalStyles />
      {hasStarted && !isLoading ? (
        <Quiz data={data} error={error} startQuiz={startQuiz}/>
      ) : isLoading ? (
        <StyledLoadingText>Loading...</StyledLoadingText>
      ) : (
        <Start startQuiz={startQuiz} />
      )}
    </main>
  )
}

export default App
