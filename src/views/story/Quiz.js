import React, { useState } from 'react';
import quizImage from './images/quiz.png';
import resulticon from "./images/resulticon.png";
import useStoryStore from '../../store/useStoryStore';

const Quiz = () => {
  const { storyData } = useStoryStore();
  const [showDialog, setShowDialog] = useState(false); 
  const [loadingResult, setLoadingResult] = useState(false); 
  const [quizCompleted, setQuizCompleted] = useState(false); 
  const [result, setResult] = useState(null); 
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  console.log(storyData.quiz.length);

  // Function to handle answer selection
  const handleAnswerChange = (questionIndex, answerValue) => {
    setSelectedAnswers(prev => {
      const updatedAnswers = { ...prev, [questionIndex]: answerValue };
      
      // Check if all questions have been answered
      const allAnswered = storyData.quiz.every((_, index) => updatedAnswers[index] !== undefined);
      setAllQuestionsAnswered(allAnswered);

      return updatedAnswers;
    });
  };

  // Function to handle form submission and display result
  const handleSubmit = () => {
    setShowDialog(true);
    setLoadingResult(true);

    setTimeout(() => {
      setLoadingResult(false);
      
      // Calculate results based on correct answers
      let correctCount = 0;
      storyData.quiz.forEach((question, index) => {
        if (selectedAnswers[index] === question.correct) {
          correctCount++;
        }
      });

      setResult({ correct: correctCount, total: storyData.quiz.length });
      setQuizCompleted(true);
    }, 3000); 
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  if (!storyData) {
    return <div>No story data found. Please go back to the story page.</div>;
  }

  return (
    <div>
      <div className="mt-[40px] md:mt-[142px]">
        <div className="flex justify-center items-center">
          <img className="w-[90%] md:w-1/2" src={quizImage} alt="quiz" />
        </div>
        <h2 className="text-[#FF8C00] text-center font-poppins text-[22px] md:text-[32px] leading-[40px] font-bold mt-[40px] md:mt-[64px]">The End...</h2>
      </div>

      <div className="mt-[20px] w-[90%] mx-auto md:mt-[40px]">
        <div className="w-[95%] md:w-[70%]">
          <h3 className="text-[#1A1A1A] font-poppins font-semibold text-[20px] md:text-[24px] leading-[36px]">Test Your Understanding</h3>
          <p className="text-[#737373] font-poppins text-[16px] leading-[24px] font-light mt-[18px]">
            Now it's time to see how well you followed along! Answer the quick questions below to test your understanding of the story and its important lessons.
          </p>

          <div className="mt-[50px] md:mt-[96px] mb-40 space-y-6">
            {storyData.quiz.map((question, index) => (
              <div className="px-4 py-8" key={index}>
                <h4 className="text-[#1A1A1A] text-[18px] md:text-[20px] leading-[28px] font-poppins font-semibold">Question {index + 1}</h4>
                <p className="pl-4 mt-[16px] text-[#737373] text-[16px] leading-[24px] font-light">{question.question}</p>

                <div className="mt-[20px] flex flex-wrap gap-[15px]">
                  {question.options.map((option, optionIndex) => (
                    <div className="flex items-center" key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        id={`question-${index}-option-${optionIndex}`}
                        onChange={() => handleAnswerChange(index, option.value)}
                        checked={selectedAnswers[index] === option.value}
                        className="h-[15px] w-[15px] md:h-[20px] md:w-[20px] text-[#1A1A1A] mr-[10px]"
                      />
                      <label
                        htmlFor={`question-${index}-option-${optionIndex}`}
                        className={`text-[14px] md:text-[16px] ${
                          quizCompleted && selectedAnswers[index] === option.value && question.correct === option.value
                            ? 'text-green-500'
                            : quizCompleted && selectedAnswers[index] === option.value
                            ? 'text-red-500'
                            : 'text-[#1A1A1A]'
                        }`}
                      >
                        {option.label.toUpperCase()}. {option.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-[134px] flex justify-between items-center">
              {!quizCompleted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className={`inline-flex mt-[24px] px-6 py-2 text-[16px] leading-[24px] font-medium text-center rounded-[16px] items-center ${allQuestionsAnswered ? 'bg-[#FF8C00] text-[#202020]' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                >
                  Submit
                </button>
              ) : (
                <div className='rounded-lg mt-10 bg-white p-5'>
                  <h2 className='text-[20px] leading-[30px] text-[#1A1A1A]'>Result</h2>
                  <h2 className="text-center text-[#737373] mt-[22px] text-[16px] font-poppins font-normal">You got {result.correct} out of {result.total} questions. Great Job!</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Alert Dialog */}
      {showDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[40%]">
            {loadingResult ? (
              <>
                <img src={resulticon} alt='resulticon' className='w-[88px] h-[94px] mx-auto object-cover' />
                <p className='text-center text-[#000000] mt-[22px] text-[16px] font-poppins font-normal'>Good Job on answering all questions!!</p>
                <div className="flex justify-center mt-[32px]">
                  <div className="loader spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-dashed border-[#FF8C00]"></div>
                </div>
                <p className="text-center mt-4 text-lg">Loading result...</p>
              </>
            ) : (
              <>
                <img src={resulticon} alt='resulticon' className='w-[88px] h-[94px] mx-auto object-cover' />
                <h2 className="text-center text-[#000000] mt-[22px] text-[16px] font-poppins font-normal">You got {result.correct} out of {result.total} questions. Great Job!</h2>
                <div className="mt-4 flex justify-center">
                  <button onClick={handleDialogClose} className="bg-[#FF8C00] text-[#000000] px-4 py-2 rounded-lg">See result</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;