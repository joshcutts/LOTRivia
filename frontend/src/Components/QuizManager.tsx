import { useState} from 'react'
import axios from 'axios';
import GetInput from './GetInput.tsx';
import Question from './Question.tsx';
import GetAnswer from './GetAnswer.tsx'
import Graded from './Graded.tsx';

export default function QuizManager( {mode}: { mode: 'easy' | 'hard' } ) {
  const [question, setQuestion] = useState('')
  const [userAnswer, setUserAnswer] = useState('')
  const [result, setResult] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')

  const handleFind = async (query: string) => {
    try {
      const res = await axios.post(`/api/similar-question`, {
        question: query,
        mode: mode,
      });
      setQuestion(res.data.question);
      setResult('');
      setUserAnswer('');
      setCorrectAnswer('');

      // console.log(res.data.question);
    } catch (err) {
      console.error('Error fetching question:', err);
    }
  };

  const handleRandom = async () => {
    try {
      const res = await axios.post(`/api/similar-question`, {
        question: 'random',
        mode: mode,
      });
      setQuestion(res.data.question);
      setResult('');
      setUserAnswer('');
      setCorrectAnswer('');
    } catch (err) {
      console.error('Error fetching random question:', err);
    }
  };

    const handleSubmitAnswer = async ( userAnswer: string) => {
    try {
      const res = await axios.post('/api/grade', {
        question: question,
        mode: mode,
        user_answer: userAnswer,
      });
      setResult(res.data.result);
      setCorrectAnswer(res.data.correctAnswer)
      setUserAnswer(res.data.userAnswer)
    } catch (err) {
      console.error('Error grading answer:', err);
    }
  };

  return (
    <>
      <GetInput onFind={handleFind} onRandom={handleRandom} />
      {question && <Question question={question} />}
      {question && (
        <GetAnswer onSubmitAnswer={handleSubmitAnswer} />
      )}
      {result && <Graded result={result} correctAnswer={correctAnswer} userAnswer={userAnswer}/>}
    </>
    
  )
}
