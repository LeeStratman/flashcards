import React, { useState } from "react";
import { connect } from "react-redux";
import { CheckCircle, ExclamationCircle } from "../icons";
import { createFlashcardRequest } from "./thunks";

const FlashcardAddForm = ({ collection, close, onSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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
            <h3 className="form-title">Add Flashcard</h3>
            <p className="form-description">
              Please enter a question and an answer.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="flashcard_question" className="form-label">
                Question
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="relative">
                  <input
                    value={question}
                    onChange={(e) => updateQuestion(e.target.value)}
                    type="text"
                    name="flashcard_question"
                    id="flashcard_question"
                    className={`input-txt ${questionErrorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {questionError ? <ExclamationCircle /> : <CheckCircle />}
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
                    value={answer}
                    onChange={(e) => updateAnswer(e.target.value)}
                    type="text"
                    name="flashcard_answer"
                    id="flashcard_answer"
                    className={`input-txt ${answerErrorClass}`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    {answerError ? <ExclamationCircle /> : <CheckCircle />}
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
            disabled={isEmptyStr(answer) || isEmptyStr(question)}
            onClick={(e) => {
              onSave(collection._id, {
                question: question.trim(),
                answer: answer.trim(),
              });
              setQuestion("");
              setAnswer("");
              close(e);
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
    dispatch(createFlashcardRequest(collectionId, flashcard)),
});

export default connect(null, mapDispatchToProps)(FlashcardAddForm);
