import React, { useState } from 'react';
import quizImage from './images/quiz.png';
import resulticon from "./images/resulticon.png";

const Quiz = () => {
  const [showDialog, setShowDialog] = useState(false); // Control dialog visibility
  const [loadingResult, setLoadingResult] = useState(false); // Control spinner visibility
  const [quizCompleted, setQuizCompleted] = useState(false); // When the user completes the quiz
  const [result, setResult] = useState(null); // To store quiz result

  const correctAnswers = { q1: 'q2', q2: 'q1', q3: 'q4' }; // Simulated correct answers
  const [selectedAnswers, setSelectedAnswers] = useState({ q1: '', q2: '', q3: '' });

  // Simulate quiz submission
  const handleSubmit = () => {
    setShowDialog(true);
    setLoadingResult(true);

    setTimeout(() => {
      setLoadingResult(false);
      setResult({ correct: 3, total: 3 }); // Simulated result
      setQuizCompleted(true);
    }, 3000); // Simulating a 3s delay
  };

  const handleAnswerChange = (question, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

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

          {/* Sample Questions */}
          <div className="mt-[50px] md:mt-[96px] mb-40 space-y-6">
            {/* Question 1 */}
            <div className="px-4 py-8">
              <h4 className="text-[#1A1A1A] text-[18px] md:text-[20px] leading-[28px] font-poppins font-semibold">Question 1</h4>
              <p className="pl-4 mt-[16px] text-[#737373] text-[16px] leading-[24px] font-light">Lorem ipsum dolor sit amet consectetur?</p>

              <div className="mt-[20px] flex flex-wrap gap-[15px]">
                {['q1', 'q2', 'q3', 'q4'].map(option => (
                  <div className="flex items-center" key={option}>
                    <input
                      type="radio"
                      name="q1"
                      id={`q1-${option}`}
                      onChange={() => handleAnswerChange('q1', option)}
                      checked={selectedAnswers.q1 === option}
                      className="h-[15px] w-[15px] md:h-[20px] md:w-[20px] text-[#1A1A1A] mr-[10px]"
                    />
                    <label
                      htmlFor={`q1-${option}`}
                      className={`text-[14px] md:text-[16px] ${
                        quizCompleted && selectedAnswers.q1 === option && correctAnswers.q1 === option
                          ? 'text-green-500'
                          : quizCompleted && selectedAnswers.q1 === option
                          ? 'text-red-500'
                          : 'text-[#1A1A1A]'
                      }`}
                    >
                      Option {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="px-4 py-8">
              <h4 className="text-[#1A1A1A] text-[18px] md:text-[20px] leading-[28px] font-poppins font-semibold">Question 2</h4>
              <p className="pl-4 mt-[16px] text-[#737373] text-[16px] leading-[24px] font-light">Lorem ipsum dolor sit amet consectetur?</p>

              <div className="mt-[20px] flex flex-wrap gap-[15px]">
                {['q1', 'q2', 'q3', 'q4'].map(option => (
                  <div className="flex items-center" key={option}>
                    <input
                      type="radio"
                      name="q2"
                      id={`q2-${option}`}
                      onChange={() => handleAnswerChange('q2', option)}
                      checked={selectedAnswers.q2 === option}
                      className="h-[15px] w-[15px] md:h-[20px] md:w-[20px] text-[#1A1A1A] mr-[10px]"
                    />
                    <label
                      htmlFor={`q2-${option}`}
                      className={`text-[14px] md:text-[16px] ${
                        quizCompleted && selectedAnswers.q2 === option && correctAnswers.q2 === option
                          ? 'text-green-500'
                          : quizCompleted && selectedAnswers.q2 === option
                          ? 'text-red-500'
                          : 'text-[#1A1A1A]'
                      }`}
                    >
                      Option {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="px-4 py-8">
              <h4 className="text-[#1A1A1A] text-[18px] md:text-[20px] leading-[28px] font-poppins font-semibold">Question 3</h4>
              <p className="pl-4 mt-[16px] text-[#737373] text-[16px] leading-[24px] font-light">Lorem ipsum dolor sit amet consectetur?</p>

              <div className="mt-[20px] flex flex-wrap gap-[15px]">
                {['q1', 'q2', 'q3', 'q4'].map(option => (
                  <div className="flex items-center" key={option}>
                    <input
                      type="radio"
                      name="q3"
                      id={`q3-${option}`}
                      onChange={() => handleAnswerChange('q3', option)}
                      checked={selectedAnswers.q3 === option}
                      className="h-[15px] w-[15px] md:h-[20px] md:w-[20px] text-[#1A1A1A] mr-[10px]"
                    />
                    <label
                      htmlFor={`q3-${option}`}
                      className={`text-[14px] md:text-[16px] ${
                        quizCompleted && selectedAnswers.q3 === option && correctAnswers.q3 === option
                          ? 'text-green-500'
                          : quizCompleted && selectedAnswers.q3 === option
                          ? 'text-red-500'
                          : 'text-[#1A1A1A]'
                      }`}
                    >
                      Option {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[134px] flex justify-between items-center">
              {!quizCompleted ? (
                <button
                  onClick={handleSubmit}
                  className="inline-flex mt-[24px] bg-[#FF8C00] rounded-[16px] items-center px-6 py-2 text-[16px] leading-[24px] font-medium text-center text-[#202020]"
                >
                  Submit
                </button>
              ) : (<div className='rounded-lg mt-10 bg-white p-5'>
                    <h2 className='text-[20px] leading-[30px] text-[#1A1A1A]'>Result</h2>
                    <h2 className="text-center text-[#737373] mt-[22px] text-[16px] font-poppins font-normal">You got {result.correct} out of {result.total} questions. Great Job!</h2>
              </div>)}
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
                    <img
                        src={resulticon}
                        alt='resulticon'
                        className=' w-[88px] h-[94px] mx-auto object-cover'
                    />
                    <p className=' text-center text-[#000000] mt-[22px] text-[16px] font-poppins font-normal'>Good Job on answering all questions!!</p>
                <div className="flex justify-center mt-[32px]">
                   
                  <div className="loader spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-dashed border-[#FF8C00]"></div>
                </div>
                <p className="text-center mt-4 text-lg">Loading result...</p>
              </>
            ) : (
              <>
                 <img
                        src={resulticon}
                        alt='resulticon'
                        className=' w-[88px] h-[94px] mx-auto object-cover'
                    />
                <h2 className="text-center text-[#000000] mt-[22px] text-[16px] font-poppins font-normal">You got {result.correct} out of {result.total} questions. Great Job!</h2>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleDialogClose}
                    className="bg-[#FF8C00] text-[#000000] px-4 py-2 rounded-lg"
                  >
                    See result
                  </button>
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
