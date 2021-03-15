import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFlashcardRequest } from "./thunks";

const FlashcardEditForm = ({ collectionId, flashcard, close, onSave }) => {
  const { question, answer } = flashcard;
  const [questionValue, setQuestion] = useState(question);
  const [answerValue, setAnswer] = useState(answer);
  const [questionError, setQuestionError] = useState(false);
  const [answerError, setAnswerError] = useState(false);

  const answerErrorClass = answerError ? "input-error" : "";
  const questionErrorClass = questionError ? "input-error" : "";

  const updateQuestion = (question) => {
    isEmptyStr(question) ? setQuestionError(true) : setQuestionError(false);

    setQuestion(question);
  };

  const updateAnswer = (answer) => {
    isEmptyStr(answer) ? setAnswerError(true) : setAnswerError(false);

    setAnswer(answer);
  };

  const isEmptyStr = (str) => {
    return str.trim() === "" ? true : false;
  };

  return (
    <>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit Flashcard
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please enter a question and an answer for the flashcard.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="flashcard_question"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Question
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="relative">
                  <input
                    placeholder={question}
                    value={questionValue}
                    onChange={(e) => updateQuestion(e.target.value)}
                    type="text"
                    name="flashcard_question"
                    className={`input-txt ${questionErrorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {questionError ? (
                      <svg
                        className="h-5 w-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <label
                htmlFor="flashcard_answer"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Answer
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="relative">
                  <input
                    placeholder={answer}
                    value={answerValue}
                    onChange={(e) => updateAnswer(e.target.value)}
                    type="text"
                    name="flashcard_answer"
                    className={`input-txt ${answerErrorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {answerError ? (
                      <svg
                        className="h-5 w-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={(e) => {
              close(e);
            }}
            type="button"
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            disabled={isEmptyStr(answerValue) || isEmptyStr(questionValue)}
            onClick={(e) => {
              onSave(collectionId, {
                _id: flashcard._id,
                question: questionValue.trim(),
                answer: answerValue.trim(),
              });
              setQuestion("");
              setAnswer("");
              close();
            }}
            type="submit"
            className="btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSave: (collectionId, flashcard) =>
    dispatch(updateFlashcardRequest(collectionId, flashcard)),
});

export default connect(null, mapDispatchToProps)(FlashcardEditForm);
